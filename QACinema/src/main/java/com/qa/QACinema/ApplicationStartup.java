package com.qa.QACinema;

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

import com.qa.QACinema.domain.UpcomingMovie;
import com.qa.QACinema.repository.UpcomingMovieRepository;

@Component

public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

	private String getUpComingMoviesURI;
	private RestTemplate restTemplate;
	private String returnedJsonString;

	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieId = new ArrayList<String>();
	private List<String> movieTitle = new ArrayList<String>();
	private List<String> moviePosterUrl = new ArrayList<String>();
	private List<String> movieDescription = new ArrayList<String>();

	private List<String> movieTitleUrls = new ArrayList<String>();

	private UpcomingMovie upComingMovie;

	@Autowired
	UpcomingMovieRepository upcomingMovieRepository;

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {

		getUpcomingMovies();
	}

	private void getUpcomingMovies() {
		getUpComingMoviesURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=319d7e3859642548e10f6ace5cd3a672";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(getUpComingMoviesURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateMovieTitleList(resultsArray);
		populateMovieIdList(resultsArray);

		movieTitle.stream().forEach(x -> movieTitleUrls.add("http://www.omdbapi.com/?apikey=38b54c63&t=" + x));

		movieTitleUrls.stream().forEach(x -> populateMoviePosterUrlList(x));

		movieTitleUrls.stream().forEach(x -> populateMovieDescriptionList(x));

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

	private void populateMoviePosterUrlList(String aMovieUrl) {
		getUpComingMoviesURI = aMovieUrl;
		returnedJsonString = restTemplate.getForObject(getUpComingMoviesURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		moviePosterUrl.add(returnedJsonStringAsObj.getString("Poster"));
	}

	private void populateMovieDescriptionList(String aMovieUrl) {
		getUpComingMoviesURI = aMovieUrl;
		returnedJsonString = restTemplate.getForObject(getUpComingMoviesURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		movieDescription.add(returnedJsonStringAsObj.getString("Plot"));
	}

	private void populateDBWithUpcomingMovies(int index) {
		upComingMovie = new UpcomingMovie();
		upComingMovie.setMovieId(movieId.get(index));
		upComingMovie.setTitle(movieTitle.get(index));
		upComingMovie.setDescription(movieDescription.get(index));
		upComingMovie.setPoster(moviePosterUrl.get(index));

		upcomingMovieRepository.insert(upComingMovie);
	}
}
