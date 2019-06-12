package qacinemas.service;

import java.util.List;

import qacinemas.models.Events;

public interface ShowingService {

	List<Events> findAll();
	String createShowing(Events show);

}