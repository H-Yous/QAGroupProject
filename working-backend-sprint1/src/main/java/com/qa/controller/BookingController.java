package com.qa.controller;

import static com.qa.constants.PROJ_CONSTANTS.bookingsPath;
import static com.qa.constants.PROJ_CONSTANTS.createBooking;
import static com.qa.constants.PROJ_CONSTANTS.getAllBookings;

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

import com.qa.domain.Booking;
import com.qa.service.BookingServiceImpl;

@RestController
@RequestMapping(bookingsPath)
@CrossOrigin("*")
public class BookingController {

	@Autowired
	BookingServiceImpl bookingServiceImpl;

	@GetMapping(getAllBookings)
	public ResponseEntity<?> getAllShowings() {
		List<Booking> result = bookingServiceImpl.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	@PostMapping(createBooking)
	public ResponseEntity<?> createShowing(@Valid @RequestBody Booking booking) {
		Booking result = bookingServiceImpl.createBooking(booking);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

}
