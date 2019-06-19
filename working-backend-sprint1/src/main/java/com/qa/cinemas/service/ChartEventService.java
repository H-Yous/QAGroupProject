package com.qa.cinemas.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.qa.cinemas.domain.ChosenSeats;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import seatsio.SeatsioClient;
import seatsio.events.Event;

import static com.qa.cinemas.constants.Constants.seatsIoApiKey;

<<<<<<< HEAD

@RestController
// @RequestMapping("/")
=======
@RestController
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
@CrossOrigin("*")
public class ChartEventService {

	private String secretKey = seatsIoApiKey;
	private String chartKey;
	private String eventKey;
	private SeatsioClient client;
	private String[] seatsObject;

<<<<<<< HEAD

    public ChartEventService(){
        client = new SeatsioClient(this.secretKey);
    }
    public ChartEventService(String secretKey, String chartKey, String eventKey) {
        this.secretKey = secretKey;
        this.chartKey = chartKey;
        this.eventKey = eventKey;
        client = new SeatsioClient(this.secretKey);
=======
	public ChartEventService() {
		client = new SeatsioClient(this.secretKey);
		
	}

	public ChartEventService(String secretKey, String chartKey, String eventKey) {
		this.secretKey = secretKey;
		this.chartKey = chartKey;
		this.eventKey = eventKey;
		client = new SeatsioClient(this.secretKey);
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

	}

	public String createEvent(String eventKey) {
		this.client.events.create(this.chartKey, eventKey);

		return "Created Event";
	}

<<<<<<< HEAD
    

    public String deleteEvent(String eventKey){
        this.client.events.delete(eventKey);
        this.client.events.listAll().count();
=======
	public String deleteEvent(String eventKey) {
		this.client.events.delete(eventKey);
		this.client.events.listAll().count();
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

		return "Deleted Event";
	}

	public int countEvents() {
		return (int) this.client.events.listAll().count();
	}

<<<<<<< HEAD
   
    
    public void bookObjects(String object, String token) {
        System.out.println(object);
        List<String> bookSeats = new ArrayList<String>();
        
        bookSeats.add(object);
        
        client.events.book(this.eventKey, bookSeats, token);
        
    }
=======
	public void bookObjects(List<String> seats, String token) {
		client.events.book(this.eventKey, seats, token);
	}
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

	public String getSecretKey() {
		return secretKey;
	}

	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}

	public String getChartKey() {
		return chartKey;
	}

	public void setChartKey(String chartKey) {
		this.chartKey = chartKey;
	}

	public String getEventKey() {
		return eventKey;
	}

	public void setEventKey(String eventKey) {
		this.eventKey = eventKey;
	}

	public SeatsioClient getClient() {
		return client;
	}

	public void setClient() {
		this.client = new SeatsioClient(this.secretKey);
	}
}