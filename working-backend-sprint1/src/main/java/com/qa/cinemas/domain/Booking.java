package com.qa.cinemas.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;

@Document(collection = "Bookings")
public class Booking {

	@Override
	public String toString() {
		return "Booking [id=" + id + ", salesID=" + salesID + ", day=" + day + ", screen=" + screen + ", timeSlot="
				+ timeSlot + ", seatNumber=" + seatNumber + ", customerID=" + customerID + ", price=" + price + "]";
	}

	@Transient
	public static final String SEQUENCE_NAME = "bookings_sequence";
	
	@Id
	private long id;

	@Indexed(unique = true)
	private long salesID;

	@NotNull
	private Days day;

	@NotNull
	private Screens screen;
	
	@NotNull
	private TimeSlots timeSlot;

	@NotBlank
	private String seatNumber;

	@NotBlank
	private String customerID;

	@NotBlank
	private String price;

	public Booking() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSalesID() {
		return salesID;
	}

	public void setSalesID(Long salesID) {
		this.salesID = salesID;
	}

	public Days getDay() {
		return day;
	}

	public void setDay(Days day) {
		this.day = day;
	}

	public Screens getScreen() {
		return screen;
	}

	public void setScreen(Screens screen) {
		this.screen = screen;
	}

	public TimeSlots getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(TimeSlots timeSlot) {
		this.timeSlot = timeSlot;
	}

	public String getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}


}
