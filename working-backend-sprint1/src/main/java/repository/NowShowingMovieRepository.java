package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.NowShowingMovie;

public interface NowShowingMovieRepository extends MongoRepository<NowShowingMovie, String>{

}
