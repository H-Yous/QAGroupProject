package qacinemas;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import qacinemas.models.NewReleaseMovie;
import qacinemas.models.NowShowingMovie;
import qacinemas.models.UpcomingMovie;
import qacinemas.repository.NewReleaseMovieRepository;
import qacinemas.repository.NowShowingMovieRepository;
import qacinemas.repository.UpcomingMovieRepository;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

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

	@Autowired
	private UpcomingMovieRepository upcomingMovieRepository;

	@Autowired
	private NowShowingMovieRepository nowShowingMovieRepository;

	@Autowired
	private NewReleaseMovieRepository newReleaseMovieRepository;

	private String currentYear = new SimpleDateFormat("yyyy").format(new Date());

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {

//		getUpcomingMovies();
//
//		movieId.clear();
//		movieTitle.clear();
//		moviePoster.clear();
//		movieDescription.clear();
//		movieTitleUrl.clear();
//
//		waitFiveSecsBeforeMakingRequests();
//
//		getNowShowingMovies();
//
//		movieId.clear();
//		movieTitle.clear();
//		moviePoster.clear();
//		movieDescription.clear();
//		movieTitleUrl.clear();
//
//		waitFiveSecsBeforeMakingRequests();
//
//		getNewReleaseMovies();
//		
//		waitFiveSecsBeforeMakingRequests();
		
//		getMovieClassificationInfo();
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

		posters = posters.substring(0, posters.length() - 1);
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
	
	private void getMovieClassificationInfo()
	{
		apiURI = "https://api.themoviedb.org/3/certification/movie/list?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		
		JSONObject certificationsObj = returnedJsonStringAsObj.getJSONObject("certifications");
		
		resultsArray = certificationsObj.getJSONArray("GB");
		
		//JSONArray params = obj.getJsonArray("params");
		
	}
	
	private void waitFiveSecsBeforeMakingRequests() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
