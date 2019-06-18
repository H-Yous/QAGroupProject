package com.qa.cinemas;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.qa.cinemas.domain.NowShowingMovie;
import com.qa.cinemas.domain.UpcomingMovie;
import com.qa.cinemas.repository.UpcomingMovieRepository;

@Component
public class PopulateUpcomingMovies {

	private String apiURI;
	private RestTemplate restTemplate;
	private String returnedJsonString;
	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieTitle;
	private List<String> movieId;
	private String posters = "";
	private List<String> moviePoster;
	private List<String> movieDescription;

	private UpcomingMovie upComingMovie;

	@Autowired
	private UpcomingMovieRepository upcomingMovieRepository;

	public PopulateUpcomingMovies() {
		movieTitle = new ArrayList<String>();
		movieId = new ArrayList<String>();
		moviePoster = new ArrayList<String>();
		movieDescription = new ArrayList<String>();
	}

	public void start() {
		apiURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e527fe3aa9735362a7f95d86cd6093ad&language=en-GB&page=1&region=gb";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateMovieTitleList(resultsArray);
		populateMovieIdList(resultsArray);

		movieId.stream().forEach(x -> populatemoviePosterList(x));

		movieId.stream().forEach(x -> populatemovieDescriptionList(x));

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

	private void populatemovieDescriptionList(String aMovieId) {

		waitFiveSecsBeforeMakingRequests();

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId
				+ "?api_key=e527fe3aa9735362a7f95d86cd6093ad&language=en-US";
		returnedJsonString = restTemplate.getForObject(apiURI, String.class);

		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		movieDescription.add(returnedJsonStringAsObj.getString("overview"));

	}

	private void populateDBWithUpcomingMovies(int index) {

		if (!(moviePoster.get(index).equals(""))) {
			upComingMovie = new UpcomingMovie();
			upComingMovie.setMovieId(movieId.get(index));
			upComingMovie.setTitle(movieTitle.get(index));
			upComingMovie.setDescription(movieDescription.get(index));

			upComingMovie.setPoster(moviePoster.get(index));

			upcomingMovieRepository.insert(upComingMovie);
		}

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