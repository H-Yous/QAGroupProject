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

import com.qa.cinemas.domain.NewReleaseMovie;
import com.qa.cinemas.service.NewReleaseMovieService;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.getNewReleasedMoviesPath;

@RestController
@RequestMapping("/api")
@CrossOrigin(crossOriginsPath)
public class NewReleaseMovieController {

	@Autowired
	private NewReleaseMovieService newReleaseMovieService;

	@GetMapping(getNewReleasedMoviesPath)
	public ResponseEntity<?> getNewReleased() {
		List<NewReleaseMovie> result = newReleaseMovieService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
}
