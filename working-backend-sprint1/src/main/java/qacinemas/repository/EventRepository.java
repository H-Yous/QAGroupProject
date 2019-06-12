package qacinemas.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.Events;

public interface EventRepository extends MongoRepository<Events, String> {
	
	public Optional<Events> findByEventKey(String eventKey);

}
