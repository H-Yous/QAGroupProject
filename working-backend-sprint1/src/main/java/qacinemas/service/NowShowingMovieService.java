package qacinemas.service;

import java.util.List;

import qacinemas.models.NowShowingMovie;

public interface NowShowingMovieService {
	
	List<NowShowingMovie> findAll();

}
