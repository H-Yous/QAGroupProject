package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.NowShowingMovie;

public interface NowShowingMovieRepository extends MongoRepository<NowShowingMovie, String>{

}
