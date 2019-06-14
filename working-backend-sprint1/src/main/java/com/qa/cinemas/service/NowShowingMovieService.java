package com.qa.cinemas.service;

import java.util.List;

import com.qa.cinemas.domain.NowShowingMovie;

public interface NowShowingMovieService {
	
	List<NowShowingMovie> findAll();

}
