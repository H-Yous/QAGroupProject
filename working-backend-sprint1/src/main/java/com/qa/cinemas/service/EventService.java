package com.qa.cinemas.service;

import java.util.List;
import java.util.Optional;

import com.qa.cinemas.domain.Events;

public interface EventService {

	List<Events> findAll();
	String createEvent(Events show);
	Optional<Events> findByEventKey(String eventKey);

}