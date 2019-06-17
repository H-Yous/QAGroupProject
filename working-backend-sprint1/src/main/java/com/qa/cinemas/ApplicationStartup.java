package com.qa.cinemas;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.qa.cinemas.controller.EventController;
import com.qa.cinemas.domain.Certification;
import com.qa.cinemas.domain.NewReleaseMovie;
import com.qa.cinemas.domain.NowShowingMovie;
import com.qa.cinemas.domain.UpcomingMovie;
import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.repository.CertificationRepository;
import com.qa.cinemas.repository.NewReleaseMovieRepository;
import com.qa.cinemas.repository.NowShowingMovieRepository;
import com.qa.cinemas.repository.UpcomingMovieRepository;
import com.qa.cinemas.service.EventServiceImpl;
import com.qa.cinemas.domain.Events;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfDays;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfScreens;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfTimeSlots;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfEvents;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

	private Events eventToBeSaved;

	private String getUpComingMoviesURI;
	private String apiURI;

	private RestTemplate restTemplate;
	private String returnedJsonString;

	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieId = new ArrayList<String>();
	private List<String> movieTitle = new ArrayList<String>();

	private List<String> moviePoster = new ArrayList<String>();
	private String posters = "";
	private List<String> movieDescription = new ArrayList<String>();
	private List<String> movieTitleUrl = new ArrayList<String>();
	private String actors = "";
	private List<String> movieActors = new ArrayList<String>();
	private List<String> movieDirector = new ArrayList<String>();

	private List<String> movieRating = new ArrayList<String>();
	private List<String> movieRatingDescription = new ArrayList<String>();

	private UpcomingMovie upComingMovie;
	private NowShowingMovie nowShowingMovie;
	private NewReleaseMovie newReleaseMovie;
	private Certification certification;

	@Autowired
	private UpcomingMovieRepository upcomingMovieRepository;

	@Autowired
	private NowShowingMovieRepository nowShowingMovieRepository;

	@Autowired
	private NewReleaseMovieRepository newReleaseMovieRepository;

	@Autowired
	private CertificationRepository certificationRepository;

	@Autowired
	private EventServiceImpl eventServiceImpl;

	private String currentYear = new SimpleDateFormat("yyyy").format(new Date());

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {
		System.out.println("RUNNING STARTUP, PLEASE WAIT TILL THIS IS FINISHED BEFORE RUNNING ANYTHING");
		populateEvents();

		getUpcomingMovies();
		movieId.clear();
		movieTitle.clear();
		moviePoster.clear();
		movieDescription.clear();
		movieTitleUrl.clear();

		waitFiveSecsBeforeMakingRequests();

		getNowShowingMovies();

		movieId.clear();
		movieTitle.clear();
		moviePoster.clear();
		movieDescription.clear();
		movieTitleUrl.clear();

		waitFiveSecsBeforeMakingRequests();

		getNewReleaseMovies();

		waitFiveSecsBeforeMakingRequests();

		getMovieClassificationInfo();
		
		System.out.println("STARTUP FINISHED");
	}

	private void getUpcomingMovies() {
		apiURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateMovieTitleList(resultsArray);
		populateMovieIdList(resultsArray);

		movieTitle.stream().forEach(x -> movieTitleUrl.add("http://www.omdbapi.com/?apikey=38b54c63&t=" + x));

		movieId.stream().forEach(x -> populatemoviePosterList(x));

		movieTitleUrl.stream().forEach(x -> populatemovieDescriptionList(x));

		movieId.stream().forEach(x -> populateDBWithUpcomingMovies(movieId.indexOf(x)));

	}

	private void populateMovieTitleList(JSONArray movies) {
		StreamSupport.stream(movies.spliterator(), false).map(aMovie -> (JSONObject) aMovie)
				.forEach(aMovie -> movieTitle.add(aMovie.getString("title")));
	}

	private void populateMovieIdList(JSONArray movies) {
		StreamSupport.stream(resultsArray.spliterator(), false).map(aMovie -> (JSONObject) aMovie)
				.forEach(aMovie -> movieId.add(Integer.toString(aMovie.getInt("id"))));
	}

	private void populatemoviePosterList(String aMovieId) {

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId + "/images?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("backdrops");

		StreamSupport.stream(resultsArray.spliterator(), false).map(aMovieImage -> (JSONObject) aMovieImage)
				.forEach(aMovieImage -> posters += "https://image.tmdb.org/t/p/original"
						+ aMovieImage.getString("file_path") + ",");

		posters = posters.substring(0, posters.length());
		String[] postersSplit = posters.split(",");
		moviePoster.add(postersSplit[0]);
		posters = "";

	}

	private void populatemovieDescriptionList(String aMovieUrl) {
		apiURI = aMovieUrl;
		returnedJsonString = restTemplate.getForObject(apiURI, String.class);

		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		movieDescription.add(returnedJsonStringAsObj.getString("Plot"));
	}

	private void populateDBWithUpcomingMovies(int index) {

		upComingMovie = new UpcomingMovie();
		upComingMovie.setMovieId(movieId.get(index));
		upComingMovie.setTitle(movieTitle.get(index));
		upComingMovie.setDescription(movieDescription.get(index));

		upComingMovie.setPoster(moviePoster.get(index));

		upcomingMovieRepository.insert(upComingMovie);
	}

	private void getNowShowingMovies() {
		apiURI = "https://api.themoviedb.org/3/movie/now_playing?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateMovieTitleList(resultsArray);
		populateMovieIdList(resultsArray);

		movieTitle.stream().forEach(x -> movieTitleUrl.add("http://www.omdbapi.com/?apikey=38b54c63&t=" + x));

		movieId.stream().forEach(x -> populatemoviePosterList(x));

		movieTitleUrl.stream().forEach(x -> populatemovieDescriptionList(x));

		movieId.stream().forEach(x -> populateDBWithNowShowingMovies(movieId.indexOf(x)));
	}

	private void populateDBWithNowShowingMovies(int index) {
		nowShowingMovie = new NowShowingMovie();
		nowShowingMovie.setMovieId(movieId.get(index));
		nowShowingMovie.setTitle(movieTitle.get(index));
		nowShowingMovie.setDescription(movieDescription.get(index));
		nowShowingMovie.setPoster(moviePoster.get(index));

		nowShowingMovieRepository.insert(nowShowingMovie);
	}

	private void getNewReleaseMovies() {
		apiURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateCurrentYearMovieIdList(resultsArray);
		movieId.stream().forEach(x -> populateCurrentYearMovieTitleList(x));
		movieId.stream().forEach(x -> populateCurrentYearmovieActorsList(x));
		movieId.stream().forEach(x -> populateCurrentYearMovieDirectorsList(x));
		movieId.stream().forEach(x -> populatemoviePosterList(x));

		movieId.stream().forEach(x -> populateDBWithNewReleaseMovieMovies(movieId.indexOf(x)));
	}

	private void populateCurrentYearMovieIdList(JSONArray resultsArray) {
		StreamSupport.stream(resultsArray.spliterator(), false).limit(5).map(aMovie -> (JSONObject) aMovie)
				.filter(aMovie -> aMovie.getString("release_date").substring(0, 4).equals(currentYear))
				.forEach(aMovie -> movieId.add(Integer.toString(aMovie.getInt("id"))));

	}

	private void populateCurrentYearMovieTitleList(String aMovieId) {
		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId + "?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);

		movieTitle.add(returnedJsonStringAsObj.getString("original_title"));

	}

	private void populateCurrentYearmovieActorsList(String aMovieId) {
		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId + "/credits?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("cast");

		actors = "";

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCastMember -> (JSONObject) aCastMember)
				.forEach(aCastMember -> actors += aCastMember.getString("name") + ",");

		actors = actors.substring(0, actors.length() - 1);

		movieActors.add(actors);

	}

	private void populateCurrentYearMovieDirectorsList(String aMovieId) {

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId + "/credits?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("crew");

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCrewMember -> (JSONObject) aCrewMember)
				.forEach(aCastMember -> {
					if (aCastMember.getString("job").equals("Director")) {
						movieDirector.add(aCastMember.getString("name"));
					}
				});

	}

	private void populateDBWithNewReleaseMovieMovies(int index) {
		newReleaseMovie = new NewReleaseMovie();
		newReleaseMovie.setMovieId(movieId.get(index));
		newReleaseMovie.setTitle(movieTitle.get(index));
		newReleaseMovie.setActors(movieActors.get(index));
		newReleaseMovie.setDirector(movieDirector.get(index));
		newReleaseMovie.setPoster(moviePoster.get(index));

		newReleaseMovieRepository.insert(newReleaseMovie);
	}

	private void getMovieClassificationInfo() {
		apiURI = "https://api.themoviedb.org/3/certification/movie/list?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);

		JSONObject certificationsObj = returnedJsonStringAsObj.getJSONObject("certifications");

		resultsArray = certificationsObj.getJSONArray("GB");

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCertification -> (JSONObject) aCertification)
				.filter(aCertification -> aCertification.getString("certification").matches("U|PG|12A|15|18"))
				.forEach(aCertification -> movieRating.add(aCertification.getString("certification")));

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCertification -> (JSONObject) aCertification)
				.filter(aCertification -> aCertification.getString("certification").matches("U|PG|12A|15|18"))
				.forEach(aCertification -> movieRatingDescription.add(aCertification.getString("meaning")));

		movieRating.stream().forEach(x -> populateDBWithCertifications(movieRating.indexOf(x)));

	}

	private void populateDBWithCertifications(int index) {
		certification = new Certification();
		certification.setName(movieRating.get(index));
		certification.setDescription(movieRatingDescription.get(index));

		certificationRepository.insert(certification);
	}

	private void waitFiveSecsBeforeMakingRequests() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Bean
	private JavaMailSender emailSender() {
		JavaMailSenderImpl javaMailSenderImplementation = new JavaMailSenderImpl();
		javaMailSenderImplementation.setHost("smtp.gmail.com");
		javaMailSenderImplementation.setPort(587);

		javaMailSenderImplementation.setUsername("purpleqacinemas@gmail.com");
		javaMailSenderImplementation.setPassword("qalondon6#teamfaheem");

		Properties props = javaMailSenderImplementation.getJavaMailProperties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		return javaMailSenderImplementation;
	};

	private void populateEvents() {
		if (eventServiceImpl.findAll().size() < numberOfEvents) {
			System.out
					.println("No events or not enough events detected in the database, populating the events database");
			eventToBeSaved = new Events();
			eventToBeSaved.setId(0);
			eventToBeSaved.setMovie("N/A");
			for (int i = 0; i < numberOfDays; i++) {
				eventToBeSaved.setDay(Days.values()[i]);
				for (int j = 0; j < numberOfScreens; j++) {
					eventToBeSaved.setScreen(Screens.values()[j]);
					for (int k = 0; k < numberOfTimeSlots; k++) {
						eventToBeSaved.setTimeSlot(TimeSlots.values()[k]);
						eventToBeSaved.setEventKey("[" + (i + 1) + "-" + (j + 1) + "-" + (k + 1) + "]");
						eventToBeSaved.setId(eventToBeSaved.getId() + 1);
						if ((eventServiceImpl.findByEventKey(eventToBeSaved.getEventKey())).isPresent()) {
							System.out.println("event key detected, not saving");
						} else {
							System.out.println("saving event: " + eventToBeSaved);
							eventServiceImpl.createEvent(eventToBeSaved);
							// create event in io Humza Job
						}

					}
				}
			}
			System.out.println("Finished populating Database");
		} else {
			System.out.println("enough events detected, not creating any events");
		}
	}
}
