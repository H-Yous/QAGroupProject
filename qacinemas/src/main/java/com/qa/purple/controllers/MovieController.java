package com.qa.purple.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.qa.purple.models.Movie;
import com.qa.purple.repositories.MovieRepository;

public class MovieController {
	
	@Autowired
	MovieRepository movieRepository;
	
	@RequestMapping(method=RequestMethod.POST, value="/movies")
	public Movie save(@RequestBody Movie movie) {
		movieRepository.save(movie);
		return movie;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/movies/{id}")
	public Optional<Movie> show(@PathVariable String id){
		return movieRepository.findById(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/movies/{id}")
    public Movie update(@PathVariable String id, @RequestBody Movie movie) {
        Optional<Movie> optMovie = movieRepository.findById(id);
        Movie m = optMovie.get();
        if(movie.getIsbn_id() != null)
            m.setIsbn_id(movie.getIsbn_id());
        if(movie.getTitle() != null)
            m.setTitle(movie.getTitle());
        if(movie.getClassification() != null)
            m.setClassification(movie.getClassification());
        if(movie.getDetails() != null)
            m.setDetails(movie.getDetails());
        
        movieRepository.save(m);
        return m;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/movies/{id}")
    public String delete(@PathVariable String id) {
        Optional<Movie> optMovie = movieRepository.findById(id);
        Movie movie = optMovie.get();
        movieRepository.delete(movie);
        return "";
    }
	
}
