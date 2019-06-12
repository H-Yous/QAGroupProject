package com.qa.service;

import java.util.List;

import com.qa.domain.NowShowingMovie;

public interface NowShowingMovieService {
	
	List<NowShowingMovie> findAll();

}
