package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Movie;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
