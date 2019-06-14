package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.NewReleaseMovie;

public interface NewReleaseMovieRepository extends MongoRepository<NewReleaseMovie, String> {

}
