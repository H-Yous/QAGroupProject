package com.qa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.domain.NewReleaseMovie;
import com.qa.repositories.NewReleaseMovieRepository;

@Service
public class NewReleaseMovieServiceImpl implements NewReleaseMovieService {
	
	@Autowired
	NewReleaseMovieRepository newReleaseMovieRepository;

	@Override
	public List<NewReleaseMovie> findAll() {
		return newReleaseMovieRepository.findAll();
	}
}
