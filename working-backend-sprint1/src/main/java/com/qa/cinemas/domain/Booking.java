package com.qa.cinemas.domain;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Bookings")
public class Booking {

	@Id
	private String id;

	@NotBlank
	private String day;
	
	@NotBlank
	private String screen;
	
	@NotBlank
	private String timeSlot;
	
	@NotBlank
	private String seatNumber;
	
	@NotBlank
	private String customerID;
	
	@NotBlank
	private String price;
	
	public Booking() {
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getScreen() {
		return screen;
	}

	public void setScreen(String screen) {
		this.screen = screen;
	}

	public String getTimeslot() {
		return timeSlot;
	}

	public void setTimeslot(String timeslot) {
		this.timeSlot = timeslot;
	}

	public String getSeat() {
		return seatNumber;
	}

	public void setSeat(String seat) {
		this.seatNumber = seat;
	}

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customeID) {
		this.customerID = customeID;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
}
