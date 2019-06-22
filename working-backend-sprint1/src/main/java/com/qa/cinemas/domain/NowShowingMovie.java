package com.qa.cinemas.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class NowShowingMovie {
	public NowShowingMovie() {
	}

	@Id
	private String id;

	private String movieId;

	private String title;
	private String description;

	private String poster;
	private String altPoster;

	private String runtime;

	private String certification;

	private String actors;
	private String director;

	private Events events[];

	public void pushEventsArray(Events eventToBePushed) {
		System.out.println("STARTING PUSH");
		System.out.println("-----------------" +eventToBePushed);
		if (this.events == null) {
			System.out.println("NULL DETECTED IN EVENTS");

			Events[] arrayasve= {eventToBePushed};
			System.out.println(arrayasve);

			this.events=arrayasve;
			this.setEvents(arrayasve);

		} else {
			System.out.println("NULL NOT DETECTED, DOING ADD");
			List<Events> listSave = new ArrayList<>(Arrays.asList(this.events));
			Events eventToAdd = new Events();
			eventToAdd.setDay(eventToBePushed.getDay());
			eventToAdd.setEventKey(eventToBePushed.getEventKey());
			eventToAdd.setId(eventToBePushed.getId());
			eventToAdd.setMovie(eventToBePushed.getMovie());
			eventToAdd.setScreen(eventToBePushed.getScreen());
			eventToAdd.setTimeSlot(eventToBePushed.getTimeSlot());
			listSave.add(eventToAdd);
			Events[] stockArr = new Events[listSave.size()];
			stockArr = listSave.toArray(stockArr);
			this.setEvents(stockArr);
		}

		
	}

	public Events[] getEvents() {
		return events;
	}

	public void setEvents(Events[] events) {
		this.events = events;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getCertification() {
		return certification;
	}

	public void setCertification(String certification) {
		this.certification = certification;
	}

	public String getRuntime() {
		return runtime;
	}

	public void setRuntime(String runtime) {
		this.runtime = runtime;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMovieId() {
		return movieId;
	}

	public void setMovieId(String movieId) {
		this.movieId = movieId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public String getAltPoster() {
		return altPoster;
	}

	public void setAltPoster(String altPoster) {
		this.altPoster = altPoster;
	}

}
