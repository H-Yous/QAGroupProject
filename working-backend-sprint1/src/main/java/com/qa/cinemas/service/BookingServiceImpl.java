package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.repositories.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGenerator;
	

	@Override
	public List<Booking> findAll() {
		return bookingRepository.findAll();
	}

	@Override
	public Booking createBooking(Booking booking) {
		System.out.println("-----------------------CHECK-------------"+booking);
		return bookingRepository.save(booking);
	}

}
