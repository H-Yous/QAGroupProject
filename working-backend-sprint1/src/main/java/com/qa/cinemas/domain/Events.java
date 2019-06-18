package com.qa.cinemas.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;

@Document(collection = "Events")
public class Events {

	// @Transient
	// public static final String SEQUENCE_NAME = "users_sequence";

	@Override
	public String toString() {
		return "Events [day=" + day + ", screen=" + screen + ", timeSlot=" + timeSlot + ", id=" + id + ", movie="
				+ movie + ", eventKey=" + eventKey + "]";
	}

	private Days day;

	private Screens screen;
	private TimeSlots timeSlot;

	@Id
	private int id;

	private String movie;

	@NotBlank
	@Indexed(unique = true)
	private String eventKey;

	public Events() {

	}

	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public String getEventKey() {
		return eventKey;
	}

	public void setEventKey(String eventKey) {
		this.eventKey = eventKey;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
}
