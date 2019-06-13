package com.qa.cinemas.constants;

public final class PROJ_CONSTANTS {
	private PROJ_CONSTANTS() {
	}

	// showings paths e.g showings/getAllShowings
	public static final String eventsPath = "events";
	public static final String getAllEventsPath = "getAllEvents";
	public static final String findByEventKeyPath = "findByEventKey";
	public static final String createEventPath = "createEvent";

	// booking paths
	public static final String bookingsPath = "bookings";
	public static final String getAllBookings = "getAllBookings";
	public static final String createBooking = "createBooking";

	// gmail paths
	public static final String contactGmailPath = "contact";
	public static final String sendEmail = "sendEmail";
	public static final String emailReceiver = "purpleqacinemas@gmail.com";
	public static final String emailSubject = "Enquiry from visitor at QA Cinemas";
	public static final String contactGmailServer = "http://localhost:8080";
}
