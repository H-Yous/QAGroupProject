package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.UpcomingMovie;

public interface UpcomingMovieRepository extends MongoRepository<UpcomingMovie, String> {

}
