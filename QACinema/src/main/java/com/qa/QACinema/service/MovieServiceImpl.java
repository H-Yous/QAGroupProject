package com.qa.QACinema.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.QACinema.domain.UpcomingMovie;
import com.qa.QACinema.repository.UpcomingMovieRepository;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	UpcomingMovieRepository upcomingMovieRepository;
	
	@Override
	public List<UpcomingMovie> findAll() {
		return upcomingMovieRepository.findAll();
	}
	
	
	
}
