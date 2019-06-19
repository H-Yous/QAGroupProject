package com.qa.cinemas.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;

import java.util.ArrayList;
import java.util.List;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.domain.Ticket;
import com.qa.cinemas.domain.ChosenSeats;
import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.service.BookingServiceImpl;
import com.qa.cinemas.service.ChartEventService;

@RestController
@CrossOrigin("*")
public class ChosenSeatsController{


    private ChartEventService chartEvent = new ChartEventService();
    
    private Booking booking = new Booking();
    
    @Autowired
    BookingServiceImpl bookingServiceImpl;

    private Ticket ticket = new Ticket();
    private String token;
    private List<String> seats = new ArrayList<String>();
    private String title;
    private String price;
    private String type;
    private int totalprice = 0;

    
    
    @PostMapping("/bookthis")
	public String sendTicket(@RequestBody String object){
        
        JSONObject bookingAttributes = new JSONObject(object);
        
        this.seats.add(bookingAttributes.getString("seats"));

        this.ticket.setSeat(bookingAttributes.getString("seats"));
        this.ticket.setPrice(bookingAttributes.getInt("price"));
        totalprice += this.ticket.getPrice();
        this.ticket.setTitle(bookingAttributes.getString("title"));
        this.ticket.setType(bookingAttributes.getString("type"));
        //System.out.println(ticket.toString());
        
        this.booking.getTicket().add(this.ticket);
        this.ticket = new Ticket();
    
        this.token = bookingAttributes.getString("token");
        
    
		return "ticketMade";
    }

    @PostMapping("/SendBooking")
    public String sendBooking(){
        this.chartEvent.setEventKey("1-1-1");
        this.chartEvent.bookObjects(this.getSeats(), this.getToken());
        
        this.setDay();
        this.setScreen();
        this.setTimeSlot();
        booking.settotalPrice(this.totalprice);
        this.totalprice = 0;
        booking.toString();
        bookingServiceImpl.createBooking(this.booking);
        this.booking = new Booking();

        return "bookingmade";
    }

    public String setDay(){
        switch(this.chartEvent.getEventKey().substring(0,1)){
            case "1":
            booking.setDay(Days.MONDAY);
            break;
            case "2":
            booking.setDay(Days.TUESDAY);
            break;
            case "3":
            booking.setDay(Days.WEDNESDAY);
            break;
            case "4":
            booking.setDay(Days.THURSDAY);
            break;
            case "5":
            booking.setDay(Days.FRIDAY);
            break;
            case "6":
            booking.setDay(Days.SATURDAY);
            break;
            case "7":
            booking.setDay(Days.SUNDAY);
            break;

        }
        return "Day : " + booking.getDay();
    }

    public String setScreen(){
        switch(this.chartEvent.getEventKey().substring(2,3)){
            case "1":
            booking.setScreen(Screens.SMALLSCREEN);
            break;
            case "2":
            booking.setScreen(Screens.LARGESCREEN);
            break;
            case "3":
            booking.setScreen(Screens.LARGESCREEN2);
            break;
        }
        return "Screen : " + booking.getScreen();
    }

    public String setTimeSlot(){
        switch(this.chartEvent.getEventKey().substring(4,5)){
            case "1":
            booking.setTimeSlot(TimeSlots.FIRSTSLOT);
            break;
            case "2":
            booking.setTimeSlot(TimeSlots.SECONDSLOT);
            break;
            case "3":
            booking.setTimeSlot(TimeSlots.THIRDSLOT);
            break;
            case "4":
            booking.setTimeSlot(TimeSlots.FOURTHSLOT);
            break;
            case "5":
            booking.setTimeSlot(TimeSlots.FIFTHSLOT);
            break;
        }
        return "Timeslot : " + booking.getTimeSlot();
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public List<String> getSeats() {
        return seats;
    }

    public void setSeats(List<String> seats) {
        this.seats = seats;
    }

}