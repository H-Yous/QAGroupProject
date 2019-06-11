package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.Showing;

public interface ShowingRepository extends MongoRepository<Showing, String> {

}
