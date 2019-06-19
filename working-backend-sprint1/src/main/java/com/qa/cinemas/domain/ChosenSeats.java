package com.qa.cinemas.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.service.ChartEventService;

<<<<<<< HEAD

@Document(collection = "ChosenSeats")
public class ChosenSeats{


    @Id
    private String id;

    private Days day;

    private Screens screen;

    private TimeSlots timeSlot;

    private String seatNumber;

    private String ticketType;




=======
@Document(collection = "ChosenSeats")
public class ChosenSeats {

	@Id
	private String id;

	private Days day;

	private Screens screen;

	private TimeSlots timeSlot;

	private String seatNumber;

	private String ticketType;
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
}