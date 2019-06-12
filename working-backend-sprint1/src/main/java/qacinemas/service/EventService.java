package qacinemas.service;

import java.util.List;
import java.util.Optional;

import qacinemas.models.Events;

public interface EventService {

	List<Events> findAll();
	String createShowing(Events show);
	Optional<Events> findByEventKey(String eventKey);

}