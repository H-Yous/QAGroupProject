package com.qa.cinemas.service;

import java.util.List;

import com.qa.cinemas.domain.UpcomingMovie;

public interface UpcomingMovieService {

	List<UpcomingMovie> findAll();

}
