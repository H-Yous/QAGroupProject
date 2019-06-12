package com.qa.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.domain.NewReleaseMovie;

public interface NewReleaseMovieRepository extends MongoRepository<NewReleaseMovie, String> {

}
