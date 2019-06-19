package com.qa.cinemas.service;

import java.util.List;

import com.qa.cinemas.domain.Booking;

public interface BookingService {

	List<Booking> findAll();

	Booking createBooking(Booking booking);

}
