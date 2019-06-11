package com.qa.QACinema.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.QACinema.domain.UpcomingMovie;

public interface UpcomingMovieRepository extends MongoRepository<UpcomingMovie, String> {

}
