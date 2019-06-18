package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.bookingsPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.createBooking;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.getAllBookings;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.service.BookingServiceImpl;

@RestController
@RequestMapping(bookingsPath)
@CrossOrigin(crossOriginsPath)
public class BookingController {

	@Autowired
	private BookingServiceImpl bookingServiceImpl;

	@GetMapping(getAllBookings)
	public ResponseEntity<?> getAllBookings() {
		List<Booking> result = bookingServiceImpl.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	

	

	@PostMapping(createBooking)
	public ResponseEntity<?> createBookings(@Valid @RequestBody Booking booking) {
		Booking result = bookingServiceImpl.createBooking(booking);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

}
