package com.qa.cinemas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.Events;

import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.repository.EventRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository eventRepository;

	@Override
	public List<Events> findAll() {
		return eventRepository.findAll();
	}

	@Override
	public Optional<Events> findByEventKey(String eventKey) {
		return eventRepository.findByEventKey(eventKey);
	}
	
	public Optional<Events> findByMovie(String movie) {
		return eventRepository.findByMovie(movie);
	}

	@Override
	public String createEvent(Events event) {
		eventRepository.save(event);
		return "event saved with: " + event.toString();
	}

//	@Override
//	public String createShowing(Events show) {
//		Events listOfShows;
///		if (listOfShows.stream().filter(x -> show.getDay().equals(x.getDay()))
//				.filter(x -> show.getScreenType().equals(x.getScreenType()))
//				.filter(x -> show.getShowSlot().equals(x.getShowSlot())).findFirst().isPresent()) {
//			return "showing already taken, not saved to database";
//		} else {
//			showingRepository.save(show);
//			return "showing saved";
//		}
//	}

}
