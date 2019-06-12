package com.qa.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.domain.Movie;

public interface MovieRepo extends MongoRepository<Movie, String> {
}
