package com.qa.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.domain.NowShowingMovie;

public interface NowShowingMovieRepository extends MongoRepository<NowShowingMovie, String>{

}
