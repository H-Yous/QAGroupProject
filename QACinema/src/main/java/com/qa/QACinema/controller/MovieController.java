package com.qa.QACinema.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.QACinema.domain.UpcomingMovie;
import com.qa.QACinema.service.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
	
	@Autowired
	MovieService movieService;
	
	@GetMapping
	public ResponseEntity<?> getUpcoming() {
		List<UpcomingMovie> result = movieService.findAll();
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
	
	

}
