package com.qa.QACinema.service;

import java.util.List;

import com.qa.QACinema.domain.UpcomingMovie;

public interface MovieService {

	List<UpcomingMovie> findAll();

}
