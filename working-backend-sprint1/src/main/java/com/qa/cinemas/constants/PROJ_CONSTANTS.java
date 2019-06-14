package com.qa.cinemas.constants;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;

public final class PROJ_CONSTANTS {
	private PROJ_CONSTANTS() {
	}
	
	// cross origin path
	public static final String crossOriginsPath="http://localhost:8080";
	
	// movies path
	public static final String moviesPath = "/movies";
	public static final String getAllMoviesPath = "/getAllMovies";
	public static final String findByIDMoviePath = "/movie/{id}";
	public static final String createMoviePath = "/movie";
	public static final String createMoviePathPut = "/movie/{id}";
	public static final String deleteMoviePath = "/movie/{id}";
	
	// showings paths e.g showings/getAllShowings
	public static final String eventsPath = "/events";
	public static final String getAllEventsPath = "/getAllEvents";
	public static final String findByEventKeyPath = "/findByEventKey";
	public static final String createEventPath = "/createEvent";

	// booking paths
	public static final String bookingsPath = "/bookings";
	public static final String getAllBookings = "/getAllBookings";
	public static final String createBooking = "/createBooking";

	// gmail paths
	public static final String contactGmailPath = "/contact";
	public static final String sendEmail = "/sendEmail";
	public static final String emailReceiver = "purpleqacinemas@gmail.com";
	public static final String emailSubject = "Enquiry from visitor at QA Cinemas with email: ";
	
	// number of days,screens, time slots
	public static final int numberOfDays = Days.values().length;
	public static final int numberOfScreens = Screens.values().length;
	public static final int numberOfTimeSlots = TimeSlots.values().length;
	public static final int numberOfEvents = numberOfDays*numberOfScreens*numberOfTimeSlots;
}
