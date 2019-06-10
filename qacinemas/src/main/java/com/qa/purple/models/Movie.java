package com.qa.purple.models;

import org.springframework.data.annotation.Id;

import com.mongodb.lang.NonNull;

public class Movie {
	@Id
	String imdb_id; //may be helpful for integrating imdb api later
	
	@NonNull
	String title;
	String classification;
	String details;
	//etc, can be changed around
	
	public Movie() {

	}
	
	public Movie(String imdb_id, String title, String classification, String details) {
		this.imdb_id = imdb_id;
		this.title = title;
		this.classification = classification;
		this.details = details;
	}

	public String getIsbn_id() {
		return imdb_id;
	}

	public void setIsbn_id(String imdb_id) {
		this.imdb_id = imdb_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
	
}
