package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.Movie;


public interface MovieRepo extends MongoRepository<Movie, String> {
	public Movie findByTitle(String title);
}
