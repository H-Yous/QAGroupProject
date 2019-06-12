package com.qa.cinemas.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.UpcomingMovie;

public interface UpcomingMovieRepository extends MongoRepository<UpcomingMovie, String> {

}
