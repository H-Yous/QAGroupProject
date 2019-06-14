package com.qa.cinemas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.NewReleaseMovie;
import com.qa.cinemas.service.NewReleaseMovieService;

@RestController
@RequestMapping("/api")
public class NewReleaseMovieController {
	
	@Autowired
	private NewReleaseMovieService newReleaseMovieService;
	
	@GetMapping("/getNewReleasedMovies")
	public ResponseEntity<?> getNewReleased() {
		List<NewReleaseMovie> result = newReleaseMovieService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
}
