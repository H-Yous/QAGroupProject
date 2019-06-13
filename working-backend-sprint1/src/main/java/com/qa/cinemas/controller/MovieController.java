package com.qa.cinemas.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.Movie;
import com.qa.cinemas.repositories.MovieRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class MovieController {
	
	@Autowired
	private MovieRepository movieRepository;
	
	//TmdbMovies tmdbMovies = new TmdbApi("d031a10afed58ff3ceb6bf78a715466a").getMovies();
	//MovieDb tmdbMovie;

	
	@GetMapping("/movies")
	public List<Movie> getAllMovies(){
		Sort sortByCreatedAtDesc = new Sort(Sort.DEFAULT_DIRECTION.DESC, "createdAt");
		return movieRepository.findAll(sortByCreatedAtDesc);
	}

	
	
	@PostMapping("/movies")
    public Movie createMovie(@Valid @RequestBody Movie movie) {
        return movieRepository.save(movie);
    }
	
	@GetMapping(value="/movies/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable("id") String id){
		return movieRepository.findById(id)
				.map(movie->ResponseEntity.ok().body(movie))
				.orElse(ResponseEntity.notFound().build());
	}
	
//	@GetMapping(value="/tmdbmovies/{tmdb_id}")
//	public ResponseEntity<MovieDb> getTmdbMovieById(@PathVariable("tmdb_id") int tmdb_id){
//		return ResponseEntity.ok().body(tmdbMovies.getMovie(tmdb_id, "en"));
//	}

	
	@PutMapping(value="/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable("id") String id, @Valid @RequestBody Movie movie){
		return movieRepository.findById(id)
				.map(movieData->{
					movieData.setTitle(movie.getTitle());
					Movie updatedMovie = movieRepository.save(movieData);
					return ResponseEntity.ok().body(updatedMovie);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(value="/movies/{id}")
	public ResponseEntity<?> deleteMovie(@PathVariable("id") String id){
		return movieRepository.findById(id)
				.map(movie->{
					movieRepository.deleteById(id);
					return ResponseEntity.ok().build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
	

	
	
}
