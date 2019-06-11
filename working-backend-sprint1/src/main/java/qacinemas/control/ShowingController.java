package qacinemas.control;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qacinemas.models.Movie;
import qacinemas.models.Showing;
import qacinemas.repository.ShowingRepository;
import qacinemas.service.ShowingService;

@RestController
@RequestMapping("/showings")
@CrossOrigin("*")
public class ShowingController {
	
	@Autowired
	ShowingRepository showingRepository;
	
	@GetMapping("/getAllShowings")
	public List<Showing> getAllShowings(){
		Sort sortByCreatedAtDesc = new Sort(Sort.DEFAULT_DIRECTION.DESC, "createdAt");
		return showingRepository.findAll(sortByCreatedAtDesc);
	}
	
	
	@PostMapping("/showing")
    public Showing createShowing(@Valid @RequestBody Showing showing) {
        return showingRepository.save(showing);
    }
}
