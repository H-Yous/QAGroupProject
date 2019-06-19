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

import com.qa.cinemas.domain.NowShowingMovie;
import com.qa.cinemas.repository.NowShowingMovieRepository;

@Component
public class PopulateNowShowingMovies {

	private String apiURI;
	private RestTemplate restTemplate;
	private String returnedJsonString;
	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;
	private JSONArray releaseDatesArray;

	private List<String> movieTitle;
	private List<String> movieId;

	private List<String> moviePoster;
	private List<String> moviePosterAlt;
	private List<String> movieDescription;
	private List<String> movieRunTime;
	private List<String> movieCertification;

	private List<String> movieActors;
	private List<String> movieDirector;

	private boolean foundGBCertification = false;
	private String posters = "";
	private String actors = "";


	private NowShowingMovie nowShowingMovie;

	@Autowired
	private NowShowingMovieRepository nowShowingMovieRepository;

	public PopulateNowShowingMovies() {
		movieTitle = new ArrayList<String>();
		movieId = new ArrayList<String>();
		moviePoster = new ArrayList<String>();
		movieDescription = new ArrayList<String>();
		movieRunTime = new ArrayList<String>();
		movieCertification = new ArrayList<String>();

		movieActors = new ArrayList<String>();
		movieDirector = new ArrayList<String>();

		moviePosterAlt = new ArrayList<String>();

	}

	public void start() {
		apiURI = "https://api.themoviedb.org/3/movie/now_playing?api_key=e527fe3aa9735362a7f95d86cd6093ad&language=en-GB&page=1&region=gb";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		populateMovieIdList(resultsArray);
		System.out.println("-NOW SHOWING MOVIE ID'S RETRIEVED " + "(" + movieId.size() + ")");
		waitFiveSecsBeforeMakingRequests();

		populateMovieTitleList(resultsArray);
		System.out.println("-NOW SHOWING MOVIE TITLES RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populatemoviePosterList(x));
		System.out.println("-NOW SHOWING MOVIE POSTERS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populatemovieDescriptionList(x));
		System.out.println("-NOW SHOWING MOVIE DESCRIPTIONS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populatemovieRunTimeListForNowShowingMovies(x));
		System.out.println("-NOW SHOWING MOVIE RUNTIMES RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populateCurrentYearmovieActorsList(x));
		System.out.println("-NOW SHOWING  MOVIE ACTORS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populateCurrentYearMovieDirectorsList(x));
		System.out.println("-NOW SHOWING  MOVIE DIRECTORS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieId.stream().forEach(x -> populatemovieCertificationListForNowShowingMovies(x));
		System.out.println("-NOW SHOWING MOVIE CERTIFICATIONS RETRIEVED");

		movieId.stream().forEach(x -> populateDBWithNowShowingMovies(movieId.indexOf(x)));
		System.out.println("-NOW SHOWING MOVIE TABLE POPULATED");
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
		if (1 >= postersSplit.length) {
			moviePosterAlt.add(postersSplit[0]);
			} else {
			moviePosterAlt.add(postersSplit[1]);
			}
		posters = "";

	}

	private void populatemovieDescriptionList(String aMovieId) {

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId
				+ "?api_key=e527fe3aa9735362a7f95d86cd6093ad&language=en-US";
		returnedJsonString = restTemplate.getForObject(apiURI, String.class);

		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		movieDescription.add(returnedJsonStringAsObj.getString("overview"));
	}

	private void populatemovieRunTimeListForNowShowingMovies(String aMovieId) {

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId + "?api_key=e527fe3aa9735362a7f95d86cd6093ad";

		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		int runTime = returnedJsonStringAsObj.getInt("runtime");

		movieRunTime.add(Integer.toString(runTime));
	}

	private void populatemovieCertificationListForNowShowingMovies(String aMovieId) {

		apiURI = "https://api.themoviedb.org/3/movie/" + aMovieId
				+ "/release_dates?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		StreamSupport.stream(resultsArray.spliterator(), false)
				.map(aMovieCertification -> (JSONObject) aMovieCertification).forEach(aMovieCertification -> {
					if (aMovieCertification.getString("iso_3166_1").equals("GB")) {
						releaseDatesArray = aMovieCertification.getJSONArray("release_dates");

						String stringOfReleaseDatesArray = releaseDatesArray.get(0).toString();

						foundGBCertification = true;

						stringOfReleaseDatesArray = stringOfReleaseDatesArray
								.substring(stringOfReleaseDatesArray.indexOf("\"certification") + 1);
						stringOfReleaseDatesArray = stringOfReleaseDatesArray.substring(0,
								stringOfReleaseDatesArray.indexOf("}"));
						stringOfReleaseDatesArray = stringOfReleaseDatesArray.substring(15,
								stringOfReleaseDatesArray.length());

						stringOfReleaseDatesArray = stringOfReleaseDatesArray.replace("\"", "");

						if (stringOfReleaseDatesArray.equals("")) {
							movieCertification.add("N/A");
						} else {
							movieCertification.add(stringOfReleaseDatesArray);
						}

					}

				});
		if (!(foundGBCertification)) {
			movieCertification.add("N/A");
		}

		foundGBCertification = false;

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

	private void waitFiveSecsBeforeMakingRequests() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void populateDBWithNowShowingMovies(int index) {

		// remove movies without posters

		if (!(moviePoster.get(index).equals(""))) {
			nowShowingMovie = new NowShowingMovie();
			nowShowingMovie.setMovieId(movieId.get(index));
			nowShowingMovie.setTitle(movieTitle.get(index));
			nowShowingMovie.setDescription(movieDescription.get(index));
			nowShowingMovie.setPoster(moviePoster.get(index));
			nowShowingMovie.setAltPoster(moviePosterAlt.get(index));
			nowShowingMovie.setRuntime(movieRunTime.get(index));
			nowShowingMovie.setCertification(movieCertification.get(index));
			nowShowingMovie.setActors(movieActors.get(index));
			nowShowingMovie.setDirector(movieDirector.get(index));

			nowShowingMovieRepository.insert(nowShowingMovie);
		} else {
			System.out.println("Movie: " + movieTitle.get(index) + " has been discarded (no poster)");
		}

	}

}