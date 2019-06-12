package com.qa.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.domain.UpcomingMovie;

public interface UpcomingMovieRepository extends MongoRepository<UpcomingMovie, String> {

}
