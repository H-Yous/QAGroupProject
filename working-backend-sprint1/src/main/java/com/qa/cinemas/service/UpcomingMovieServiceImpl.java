package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.UpcomingMovie;
import com.qa.cinemas.repository.UpcomingMovieRepository;

@Service
public class UpcomingMovieServiceImpl implements UpcomingMovieService {

	@Autowired
	private UpcomingMovieRepository upcomingMovieRepository;

	@Override
	public List<UpcomingMovie> findAll() {
		return upcomingMovieRepository.findAll();
	}

}
