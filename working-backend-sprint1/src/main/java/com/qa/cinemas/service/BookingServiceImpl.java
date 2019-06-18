package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.repository.BookingRepository;
import com.qa.cinemas.service.ChartEventService;

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
		return bookingRepository.save(booking);
	}

}
