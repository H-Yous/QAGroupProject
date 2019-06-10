package qacinemas.control;

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



import qacinemas.models.Movie;
import qacinemas.repository.MovieRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class MovieController {
	
	@Autowired
	MovieRepo movieRepoRefVar;
	
	@GetMapping("/movies")
	public List<Movie> getAllMovies(){
		Sort sortByCreatedAtDesc = new Sort(Sort.DEFAULT_DIRECTION.DESC, "createdAt");
		return movieRepoRefVar.findAll(sortByCreatedAtDesc);
	}

	@PostMapping("/movies")
    public Movie createMovie(@Valid @RequestBody Movie movie) {
        return movieRepoRefVar.save(movie);
    }
	
	@GetMapping(value="/movies/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable("id") String id){
		return movieRepoRefVar.findById(id)
				.map(movie->ResponseEntity.ok().body(movie))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping(value="/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable("id") String id, @Valid @RequestBody Movie movie){
		return movieRepoRefVar.findById(id)
				.map(movieData->{
					movieData.setTitle(movie.getTitle());
					Movie updatedMovie = movieRepoRefVar.save(movieData);
					return ResponseEntity.ok().body(updatedMovie);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(value="/movies/{id}")
	public ResponseEntity<?> deleteMovie(@PathVariable("id") String id){
		return movieRepoRefVar.findById(id)
				.map(movie->{
					movieRepoRefVar.deleteById(id);
					return ResponseEntity.ok().build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
}
