package com.qa.cinemas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.UpcomingMovie;
import com.qa.cinemas.service.UpcomingMovieService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UpcomingMovieController {
	
	@Autowired
	UpcomingMovieService upcomingMovieService;

	@GetMapping("/getUpcomingMovies")
	public ResponseEntity<?> getUpcoming() {
		List<UpcomingMovie> result = upcomingMovieService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

}
