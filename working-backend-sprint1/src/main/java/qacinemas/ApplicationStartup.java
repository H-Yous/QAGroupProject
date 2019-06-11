package qacinemas;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import qacinemas.models.NowShowingMovie;
import qacinemas.models.UpcomingMovie;
import qacinemas.repository.NowShowingMovieRepository;
import qacinemas.repository.UpcomingMovieRepository;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

	private String apiURI;
	
	private RestTemplate restTemplate;
	private String returnedJsonString;

	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieId = new ArrayList<String>();
	private List<String> movieTitle = new ArrayList<String>();
	private List<String> moviePoster = new ArrayList<String>();
	private List<String> movieDescription = new ArrayList<String>();

	private List<String> movieTitleUrl = new ArrayList<String>();

	private UpcomingMovie upComingMovie;
	private NowShowingMovie nowShowingMovie;
	
	@Autowired
	UpcomingMovieRepository upcomingMovieRepository;
	
	@Autowired
	NowShowingMovieRepository nowShowingMovieRepository;
	

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {

		getUpcomingMovies();
		
		movieId.clear();
		movieTitle.clear();
		moviePoster.clear();
		movieDescription.clear();
		movieTitleUrl.clear();
		
		getNowShowingMovies();
		
	}

	private void getUpcomingMovies() {
		apiURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populatemovieTitleList(resultsArray);
		populatemovieIdList(resultsArray);

		movieTitle.stream().forEach(x -> movieTitleUrl.add("http://www.omdbapi.com/?apikey=38b54c63&t=" + x));

		movieTitleUrl.stream().forEach(x -> populatemoviePosterList(x));

		movieTitleUrl.stream().forEach(x -> populatemovieDescriptionList(x));

		movieId.stream().forEach(x -> populateUpComingDBWithUpcomingMovies(movieId.indexOf(x)));

	}

	private void populatemovieTitleList(JSONArray movies) {
		StreamSupport.stream(movies.spliterator(), false).map(aMovie -> (JSONObject) aMovie)
				.forEach(aMovie -> movieTitle.add(aMovie.getString("title")));
	}

	private void populatemovieIdList(JSONArray movies) {
		StreamSupport.stream(resultsArray.spliterator(), false).map(aMovie -> (JSONObject) aMovie)
				.forEach(aMovie -> movieId.add(Integer.toString(aMovie.getInt("id"))));
	}

	private void populatemoviePosterList(String aMovieUrl) {
		apiURI = aMovieUrl;
		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		moviePoster.add(returnedJsonStringAsObj.getString("Poster"));
	}

	private void populatemovieDescriptionList(String aMovieUrl) {
		apiURI = aMovieUrl;
		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		movieDescription.add(returnedJsonStringAsObj.getString("Plot"));
	}

	private void populateUpComingDBWithUpcomingMovies(int index) {
		upComingMovie = new UpcomingMovie();
		upComingMovie.setMovieId(movieId.get(index));
		upComingMovie.setTitle(movieTitle.get(index));
		upComingMovie.setDescription(movieDescription.get(index));
		upComingMovie.setPoster(moviePoster.get(index));

		upcomingMovieRepository.insert(upComingMovie);
	}
	
	private void getNowShowingMovies()
	{
		apiURI = "https://api.themoviedb.org/3/movie/now_playing?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populatemovieTitleList(resultsArray);
		populatemovieIdList(resultsArray);

		movieTitle.stream().forEach(x -> movieTitleUrl.add("http://www.omdbapi.com/?apikey=38b54c63&t=" + x));

		movieTitleUrl.stream().forEach(x -> populatemoviePosterList(x));

		movieTitleUrl.stream().forEach(x -> populatemovieDescriptionList(x));

		movieId.stream().forEach(x -> populateUpComingDBWithNowShowingMovies(movieId.indexOf(x)));
	}
	
	private void populateUpComingDBWithNowShowingMovies(int index)
	{
		nowShowingMovie = new NowShowingMovie();
		nowShowingMovie.setMovieId(movieId.get(index));
		nowShowingMovie.setTitle(movieTitle.get(index));
		nowShowingMovie.setDescription(movieDescription.get(index));
		nowShowingMovie.setPoster(moviePoster.get(index));

		nowShowingMovieRepository.insert(nowShowingMovie);
	}
}
