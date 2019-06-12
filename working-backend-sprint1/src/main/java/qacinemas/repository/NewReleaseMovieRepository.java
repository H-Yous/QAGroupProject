package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.NewReleaseMovie;

public interface NewReleaseMovieRepository extends MongoRepository<NewReleaseMovie, String> {

}
