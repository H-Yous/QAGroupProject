package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Booking;

public interface BookingRepository extends MongoRepository<Booking, Long> {
}
