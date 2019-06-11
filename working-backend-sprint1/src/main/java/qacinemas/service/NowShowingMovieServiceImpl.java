package qacinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qacinemas.models.NowShowingMovie;
import qacinemas.repository.NowShowingMovieRepository;

@Service
public class NowShowingMovieServiceImpl implements NowShowingMovieService{
	
	@Autowired
	NowShowingMovieRepository nowShowingMovieRepository;

	@Override
	public List<NowShowingMovie> findAll() {
		return nowShowingMovieRepository.findAll();
	}

}
