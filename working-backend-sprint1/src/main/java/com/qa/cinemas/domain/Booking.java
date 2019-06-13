package com.qa.cinemas.domain;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
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

	@Id
	private String id;

	@NotBlank
	@Indexed(unique = true)
	private String salesID;

	@NotBlank
	private Days day;

	@NotBlank
	private Screens screen;

	@NotBlank
	private TimeSlots timeSlot;

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

	public String getSalesID() {
		return salesID;
	}

	public void setSalesID(String salesID) {
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

}
