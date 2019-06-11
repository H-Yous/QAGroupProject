package qacinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qacinemas.enumpackage.DayTypes;
import qacinemas.enumpackage.ScreenType;
import qacinemas.enumpackage.ShowSlots;
import qacinemas.models.Showing;
import qacinemas.repository.ShowingRepository;

@Service
public class ShowingServiceImpl implements ShowingService {

	@Autowired
	ShowingRepository showingRepository;

	@Override
	public List<Showing> findAll() {
		return showingRepository.findAll();
	}

	@Override
	public String createShowing(Showing show) {
		List<Showing> listOfShows = findAll();
		if (listOfShows.stream().filter(x -> show.getDay().equals(x.getDay()))
				.filter(x -> show.getScreenType().equals(x.getScreenType()))
				.filter(x -> show.getShowSlot().equals(x.getShowSlot())).findFirst().isPresent()) {
			return "showing already taken, not saved to database";

		} else {
			showingRepository.save(show);
			return "showing saved";
		}
	}
}
