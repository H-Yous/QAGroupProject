package com.qa.cinemas.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.NewReleaseMovie;

public interface NewReleaseMovieRepository extends MongoRepository<NewReleaseMovie, String> {

}