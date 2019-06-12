package com.qa.service;

import java.util.List;

import com.qa.domain.Booking;

public interface BookingService {
	
	List<Booking> findAll();
	Booking createBooking(Booking booking);

}
