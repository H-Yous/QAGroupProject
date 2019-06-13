package com.qa.cinemas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.NowShowingMovie;
import com.qa.cinemas.service.NowShowingMovieService;

@RestController
@RequestMapping("/api")
public class NowShowingMovieController {
	
	@Autowired
	private NowShowingMovieService nowShowingMovieService;

	@GetMapping("/getNowShowingMovies")
	public ResponseEntity<?> getNowShowing() {
		List<NowShowingMovie> result = nowShowingMovieService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

}
