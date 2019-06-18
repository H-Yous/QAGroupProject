package com.qa.cinemas;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.qa.cinemas.domain.NewReleaseMovie;
import com.qa.cinemas.repository.NewReleaseMovieRepository;

@Component
public class PopulateNewReleaseMovies {

	private String apiURI;
	private RestTemplate restTemplate;
	private String returnedJsonString;
	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieTitle;
	private List<String> movieId;

	private List<String> moviePoster;

	private List<String> movieActors;
	private List<String> movieDirector;

	private String posters = "";
	private String actors = "";

	private String currentYear;

	private NewReleaseMovie newReleaseMovie;

	@Autowired
	private NewReleaseMovieRepository newReleaseMovieRepository;

	public PopulateNewReleaseMovies() {

		movieId = new ArrayList<String>();
		movieTitle = new ArrayList<String>();
		movieActors = new ArrayList<String>();
		movieDirector = new ArrayList<String>();
		moviePoster = new ArrayList<String>();

		currentYear = new SimpleDateFormat("yyyy").format(new Date());

	}

	public void start() {

		apiURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e527fe3aa9735362a7f95d86cd6093ad&language=en-GB&page=1&region=gb";
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

	private void populateDBWithNewReleaseMovieMovies(int index) {

		if (!(moviePoster.get(index).equals(""))) {
			newReleaseMovie = new NewReleaseMovie();
			newReleaseMovie.setMovieId(movieId.get(index));
			newReleaseMovie.setTitle(movieTitle.get(index));
			newReleaseMovie.setActors(movieActors.get(index));
			newReleaseMovie.setDirector(movieDirector.get(index));
			newReleaseMovie.setPoster(moviePoster.get(index));

			newReleaseMovieRepository.insert(newReleaseMovie);
		}

	}

}