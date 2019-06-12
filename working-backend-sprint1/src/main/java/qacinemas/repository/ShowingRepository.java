package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.Events;

public interface ShowingRepository extends MongoRepository<Events, String> {

}
