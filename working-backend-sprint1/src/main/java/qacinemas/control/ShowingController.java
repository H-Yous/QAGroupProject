package qacinemas.control;

import static qacinemas.constantspackage.PROJ_CONSTANTS.getAllShowsPath;
import static qacinemas.constantspackage.PROJ_CONSTANTS.createShowPath;
import static qacinemas.constantspackage.PROJ_CONSTANTS.showingsPath;


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
@RequestMapping(showingsPath)
public class ShowingController {
	
	@Autowired
	ShowingService showingService;
	
	@GetMapping(getAllShowsPath)
	public ResponseEntity<?> getAllShowings(){
		List<Showing> result = showingService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	@PostMapping(createShowPath)
    public ResponseEntity<?> createShowing(@Valid @RequestBody Showing showing) {
		String result=showingService.createShowing(showing);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}
