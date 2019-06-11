package qacinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qacinemas.models.UpcomingMovie;
import qacinemas.repository.UpcomingMovieRepository;

@Service
public class UpcomingMovieServiceImpl implements UpcomingMovieService {

	@Autowired
	UpcomingMovieRepository upcomingMovieRepository;

	@Override
	public List<UpcomingMovie> findAll() {
		return upcomingMovieRepository.findAll();
	}

}
