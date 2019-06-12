package com.qa.cinemas.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Movie;

public interface MovieRepo extends MongoRepository<Movie, String> {
}
