package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;

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
import static com.qa.cinemas.constants.PROJ_CONSTANTS.getUpcomingMoviesPath;
@RestController
@RequestMapping("/api")
@CrossOrigin(crossOriginsPath)
public class UpcomingMovieController {
	
	@Autowired
	private UpcomingMovieService upcomingMovieService;

	@GetMapping(getUpcomingMoviesPath)
	public ResponseEntity<?> getUpcoming() {
		List<UpcomingMovie> result = upcomingMovieService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

}
