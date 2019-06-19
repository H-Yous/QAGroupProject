package com.qa.cinemas.domain;

import java.util.ArrayList;
import java.util.List;

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

	// @Override
	// public String toString() {
	// return "Booking [id=" + id + ", salesID=" + salesID + ", day=" + day + ",
	// screen=" + screen + ", timeSlot="
	// + timeSlot + ", seatNumber=" + seatNumber + ", customerID=" + customerID + ",
	// price=" + price + "]";
	// }
	@Override
	public String toString() {
		return id + ", " + salesID + ", " + day + ", " + screen + ", " + timeSlot + ", " + ticket.toString() + ", "
				+ totalPrice;
	}

	@Transient
	public static final String SEQUENCE_NAME = "bookings_sequence";

	@Id
	private String id;

	@Indexed(unique = true)
	private long salesID;

	@NotNull
	private Days day;

	@NotNull
	private Screens screen;

	@NotNull
	private TimeSlots timeSlot;

	@NotNull
	private Ticket ticket[];

	@NotBlank
	private String customerID;

	@NotBlank
	private int totalPrice;

	public Booking() {
	}

	public long getSalesID() {
		return salesID;
	}

	public void setSalesID(long salesID) {
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

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	public int gettotalPrice() {
		return totalPrice;
	}

	public void settotalPrice(int totalprice2) {

		this.totalPrice = totalprice2;
	}

	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Ticket[] getTicket() {
		return ticket;
	}

	public void setTicket(Ticket[] ticket) {
		this.ticket = ticket;
	}

}
