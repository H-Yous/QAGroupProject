package com.qa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.domain.NowShowingMovie;
import com.qa.repositories.NowShowingMovieRepository;

@Service
public class NowShowingMovieServiceImpl implements NowShowingMovieService{
	
	@Autowired
	NowShowingMovieRepository nowShowingMovieRepository;

	@Override
	public List<NowShowingMovie> findAll() {
		return nowShowingMovieRepository.findAll();
	}

}
