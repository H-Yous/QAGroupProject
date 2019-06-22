package com.qa.cinemas.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;


@Document(collection = "ChosenSeats")
public class ChosenSeats {

	@Id
	private String id;

	private Days day;

	private Screens screen;

	private TimeSlots timeSlot;

	private String seatNumber;

	private String ticketType;

	public Days getDay() {
		return day;
	}

	public String getTicketType() {
		return ticketType;
	}

	public void setTicketType(String ticketType) {
		this.ticketType = ticketType;
	}

	public String getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}

	public TimeSlots getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(TimeSlots timeSlot) {
		this.timeSlot = timeSlot;
	}

	public Screens getScreen() {
		return screen;
	}

	public void setScreen(Screens screen) {
		this.screen = screen;
	}

	public void setDay(Days day) {
		this.day = day;
	}
}