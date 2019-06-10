package com.qa.purple.repositories;

import org.springframework.data.repository.CrudRepository;

import com.qa.purple.models.Movie;

public interface MovieRepository extends CrudRepository<Movie, String>{
	
	@Override
	void delete(Movie deleted);
	
}