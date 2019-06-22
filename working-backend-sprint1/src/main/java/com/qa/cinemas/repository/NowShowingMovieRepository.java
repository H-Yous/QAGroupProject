package com.qa.cinemas.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.NowShowingMovie;

public interface NowShowingMovieRepository extends MongoRepository<NowShowingMovie, String> {
	public Optional<NowShowingMovie> findByTitle(String title);

}
