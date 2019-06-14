package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.NowShowingMovie;
import com.qa.cinemas.repository.NowShowingMovieRepository;

@Service
public class NowShowingMovieServiceImpl implements NowShowingMovieService{
	
	@Autowired
	private NowShowingMovieRepository nowShowingMovieRepository;

	@Override
	public List<NowShowingMovie> findAll() {
		return nowShowingMovieRepository.findAll();
	}

}