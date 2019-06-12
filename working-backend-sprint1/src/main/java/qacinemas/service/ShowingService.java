package qacinemas.service;

import java.util.List;

import qacinemas.models.Showing;

public interface ShowingService {

	List<Showing> findAll();
	String createShowing(Showing show);

}