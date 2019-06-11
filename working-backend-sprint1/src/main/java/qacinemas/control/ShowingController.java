package qacinemas.control;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qacinemas.models.Showing;
import qacinemas.service.ShowingService;

@RestController
@RequestMapping("/showings")
public class ShowingController {
	
	@Autowired
	ShowingService showingService;
	
	@GetMapping("/getAllShowings")
	public ResponseEntity<?> getAllShowings(){
		List<Showing> result = showingService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	@PostMapping("/showing")
    public ResponseEntity<?> createShowing(@Valid @RequestBody Showing showing) {
		Showing result=showingService.createShowing(showing);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}
