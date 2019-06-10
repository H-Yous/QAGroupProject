package com.qa.QACinema;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
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
	private JSONObject aMovie;
	private RestTemplate restTemplate;
	private String returnedJsonString;

	JSONObject returnedJsonStringAsObj;
	JSONArray resultsArray;

	List<String> movieId = new ArrayList<String>();
	List<String> movieName = new ArrayList<String>();
	List<String> moviePosterUrl = new ArrayList<String>();
	List<String> movieDescription = new ArrayList<String>();
	
	UpcomingMovie upComingMovie;

	@Autowired
	UpcomingMovieRepository upcomingMovieRepository;

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {

		getUpComingMoviesURI = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
		restTemplate = new RestTemplate();
		returnedJsonString = restTemplate.getForObject(getUpComingMoviesURI, String.class);
		
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);
		resultsArray = returnedJsonStringAsObj.getJSONArray("results");

		for (int x = 0; x < resultsArray.length(); x++) {
			aMovie = resultsArray.getJSONObject(x);
			movieName.add(aMovie.getString("title"));
			movieId.add(Integer.toString(aMovie.getInt("id")));
		}

		for (int x = 0; x < movieName.size(); x++) {

			getUpComingMoviesURI = "http://www.omdbapi.com/?apikey==" + movieName.get(x);

			restTemplate = new RestTemplate();
			returnedJsonString = restTemplate.getForObject(getUpComingMoviesURI, String.class);

			returnedJsonStringAsObj = new JSONObject(returnedJsonString);
			moviePosterUrl.add(returnedJsonStringAsObj.getString("Poster"));
			movieDescription.add(returnedJsonStringAsObj.getString("Plot"));
		}
		
		for (int x = 0; x < movieName.size(); x++) {
			
			upComingMovie = new UpcomingMovie();
			
			upComingMovie.setMovieId(movieId.get(x));
			upComingMovie.setTitle(movieName.get(x));
			upComingMovie.setDescription(movieDescription.get(x));
			upComingMovie.setPoster(moviePosterUrl.get(x));
			
			upcomingMovieRepository.insert(upComingMovie);
			
		}
		
	}

}
