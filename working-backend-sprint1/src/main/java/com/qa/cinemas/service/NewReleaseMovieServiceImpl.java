package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.NewReleaseMovie;
import com.qa.cinemas.repositories.NewReleaseMovieRepository;

@Service
public class NewReleaseMovieServiceImpl implements NewReleaseMovieService {
	
	@Autowired
	private NewReleaseMovieRepository newReleaseMovieRepository;

	@Override
	public List<NewReleaseMovie> findAll() {
		return newReleaseMovieRepository.findAll();
	}
}
