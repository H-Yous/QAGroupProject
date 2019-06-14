package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.NowShowingMovie;

public interface NowShowingMovieRepository extends MongoRepository<NowShowingMovie, String>{

}
