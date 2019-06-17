package com.qa.cinemas.constants;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;

public final class PROJ_CONSTANTS {
	private PROJ_CONSTANTS() {
	}
	
	// cross origin path
	public static final String crossOriginsPath="http://localhost:3000";
	
	// movies path
	public static final String moviesPath = "/movies";
	public static final String getAllMoviesPath = "/getAllMovies";
	public static final String findByIDMoviePath = "/movie/{id}";
	public static final String createMoviePath = "/movie";
	public static final String createMoviePathPut = "/movie/{id}";
	public static final String deleteMoviePath = "/movie/{id}";
	
	public static final String getNowShowingMoviesPath = "/getNowShowingMovies";
	
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

	//Screen chartKeys
	public static final String screenOne = "077099e8-60d2-63ed-a1ae-ce7b7f7220ef";
	public static final String screenTwo = "7b3bf3b4-b4d1-46e8-b6a4-384747611bc4";
	public static final String screenThree = "1fd254fc-6c4c-4632-7b3f-54d5b3fd8923";

	//Ticket Prices
	public static final int normChild = 6;
	public static final int normStudent = 8;
	public static final int normAdult = 10;
	public static final int premChild = normChild+4;
	public static final int premStudent = normStudent+4;
	public static final int premAdult = normAdult+4;
	public static final int disabledTicket = 5;
}
