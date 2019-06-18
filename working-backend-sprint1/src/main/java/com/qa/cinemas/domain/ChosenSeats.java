package com.qa.cinemas.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.service.ChartEventService;

@Document(collection = "ChosenSeats")
public class ChosenSeats {

	@Id
	private String id;

	private Days day;

	private Screens screen;

	private TimeSlots timeSlot;

	private String seatNumber;

	private String ticketType;
}