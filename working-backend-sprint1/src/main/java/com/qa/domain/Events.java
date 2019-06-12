package com.qa.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.qa.enums.DayTypes;
import com.qa.enums.ScreenType;
import com.qa.enums.ShowSlots;

@Document(collection = "Events")
public class Events {

	// @Transient
	// public static final String SEQUENCE_NAME = "users_sequence";

	@Id
	private String id;
	
	private String movie;

	@NotBlank
	@Indexed(unique = true)
	private String eventKey;

	public Events() {

	}

	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public String getEventKey() {
		return eventKey;
	}

	public void setEventKey(String eventKey) {
		this.eventKey = eventKey;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
