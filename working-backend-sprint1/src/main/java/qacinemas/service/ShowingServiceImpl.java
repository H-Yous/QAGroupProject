package qacinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qacinemas.models.Showing;
import qacinemas.repository.ShowingRepository;

@Service
public class ShowingServiceImpl implements ShowingService {
	
	@Autowired
	ShowingRepository showingRepository;

	@Override
	public List<Showing> findAll(){
		return showingRepository.findAll();
	}

	@Override
	public Showing createShowing(Showing showing) {
		return showingRepository.save(showing);
	}
	
	

}
