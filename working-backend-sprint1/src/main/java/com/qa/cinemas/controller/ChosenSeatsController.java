package com.qa.cinemas.controller;

import org.json.JSONArray;
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

import com.mongodb.util.JSON;
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
public class ChosenSeatsController {

	private ChartEventService chartEvent = new ChartEventService();

	

	@Autowired
	BookingServiceImpl bookingServiceImpl;
	private int count = 0;
	private Ticket ticket1 = new Ticket();
	private String token;
	
	private int totalprice = 0;

	@PostMapping("/bookthis")
	public String sendTicket (@RequestBody Object object[]) {
		
		JSONArray ticketArray = new JSONArray(object);
		
		ArrayList<String> seats = new ArrayList<String>();
		for(int i = 0; i < object.length; i++){
			seats.add(ticketArray.getJSONObject(i).getString("seat"));
		}
		System.out.println(seats);
		this.chartEvent.setEventKey("1-1-1");
		try{
		String token = ticketArray.getJSONObject(0).getString("token");
		this.chartEvent.bookObjects(seats, token);
		} catch (Exception e){
			System.out.println("Didn't send to chartEvent");
		}
		
		
		List<Ticket> ticketList = new ArrayList<>();
			for(int i = 0; i < ticketArray.length(); i++){
				int price = ticketArray.getJSONObject(i).getInt("price");
				this.totalprice += price;
				String seat = ticketArray.getJSONObject(i).getString("seat");
				String title = ticketArray.getJSONObject(i).getString("title");
				String token2 = ticketArray.getJSONObject(i).getString("token");
				String type = ticketArray.getJSONObject(i).getString("type");
				
				
				Ticket ticket = new Ticket(title, type, price, seat, token2);
				System.out.println(ticket.toString());
				ticketList.add(ticket);
				
			}
			System.out.println(ticketList);

			Ticket[] ticket = ticketList.toArray(new Ticket[ticketList.size()]);
	

		this.createBooking(ticket);
		

		return "ticketMade";
	}

	public String createBooking(Ticket[] ticket){
		
		Booking booking = new Booking();
		this.setDay(booking);
		this.setScreen(booking);
		this.setTimeSlot(booking);
		booking.settotalPrice(this.totalprice);
		booking.setTicket(ticket);
		booking.setCustomerID(Integer.toString(count));
		this.count++;
		this.totalprice = 0;
		System.out.println(booking.toString());

		bookingServiceImpl.createBooking(booking);

		return "Booking created";
	}

	public String sendBooking() {
		// this.chartEvent.setEventKey("1-1-1");
		// System.out.println(this.getSeats());
		// this.chartEvent.bookObjects(this.getSeats(), this.getToken());

		// this.setDay();
		// this.setScreen();
		// this.setTimeSlot();

		// booking.settotalPrice(this.totalprice);

		// System.out.println("\n" + booking.toString());
		// bookingServiceImpl.createBooking(this.booking);

		// this.resetAll();

		return "bookingmade";
	}

	// @PostMapping("/resetBooking")
	public String resetAll() {
		// this.totalprice = 0;
		// this.booking = new Booking();
		// this.setSeats(new ArrayList<String>());
		// this.setToken(" ");
		// System.out.println("All Resetted");
		return "ALL RESETTED";
	}

	public String setDay(Booking booking) {
		switch (this.chartEvent.getEventKey().substring(0, 1)) {
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

	public String setScreen(Booking booking) {
		switch (this.chartEvent.getEventKey().substring(2, 3)) {
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

	public String setTimeSlot(Booking booking) {
		switch (this.chartEvent.getEventKey().substring(4, 5)) {
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



}