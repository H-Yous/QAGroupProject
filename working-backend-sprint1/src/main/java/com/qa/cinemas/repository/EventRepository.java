package com.qa.cinemas.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Events;

public interface EventRepository extends MongoRepository<Events, String> {

	public Optional<Events> findByEventKey(String eventKey);
	public Optional<Events> findByMovie(String movie);

}
