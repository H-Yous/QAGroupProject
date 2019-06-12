package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.createEventPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.eventsPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.findByEventKeyPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.getAllEventsPath;

import java.util.List;
import java.util.Optional;

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

import com.qa.cinemas.domain.Events;
import com.qa.cinemas.service.EventServiceImpl;

@RestController
@RequestMapping(eventsPath)
@CrossOrigin("*")
public class EventController {
	
	@Autowired
	EventServiceImpl eventServiceImpl;
	
	@GetMapping(getAllEventsPath)
	public ResponseEntity<?> getAllEvents(){
		List<Events> result = eventServiceImpl.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	@PostMapping(createEventPath)
    public ResponseEntity<?> createEvent(@Valid @RequestBody Events event) {
		String result=eventServiceImpl.createShowing(event);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
	
	@PostMapping(findByEventKeyPath)
    public ResponseEntity<?> findByEventKey(@Valid @RequestBody Events event) {
		Optional<Events> result=eventServiceImpl.findByEventKey(event.getEventKey());
		return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}
