package com.qa.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.domain.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
