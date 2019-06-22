package com.qa.cinemas;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.qa.cinemas.domain.Certification;
import com.qa.cinemas.repository.CertificationRepository;

@Component
public class PopulateMovieCertifications {

	private String apiURI;
	private RestTemplate restTemplate;
	private String returnedJsonString;
	private JSONObject returnedJsonStringAsObj;
	private JSONArray resultsArray;

	private List<String> movieRating;
	private List<String> movieRatingDescription;

	private Certification certification;

	@Autowired
	private CertificationRepository certificationRepository;

	public PopulateMovieCertifications() {
		movieRating = new ArrayList<String>();
		movieRatingDescription = new ArrayList<String>();

	}

	public void start() {
		apiURI = "https://api.themoviedb.org/3/certification/movie/list?api_key=e527fe3aa9735362a7f95d86cd6093ad";
		restTemplate = new RestTemplate();

		returnedJsonString = restTemplate.getForObject(apiURI, String.class);
		returnedJsonStringAsObj = new JSONObject(returnedJsonString);

		JSONObject certificationsObj = returnedJsonStringAsObj.getJSONObject("certifications");

		resultsArray = certificationsObj.getJSONArray("GB");

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCertification -> (JSONObject) aCertification)
				.filter(aCertification -> aCertification.getString("certification").matches("U|PG|12A|15|18"))
				.forEach(aCertification -> movieRating.add(aCertification.getString("certification")));

		System.out.println("-CERTIFICATIONS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		StreamSupport.stream(resultsArray.spliterator(), false).map(aCertification -> (JSONObject) aCertification)
				.filter(aCertification -> aCertification.getString("certification").matches("U|PG|12A|15|18"))
				.forEach(aCertification -> movieRatingDescription.add(aCertification.getString("meaning")));

		System.out.println("-CERTIFICATION DESCRIPTIONS RETRIEVED");
		waitFiveSecsBeforeMakingRequests();

		movieRating.stream().forEach(x -> populateDBWithCertifications(movieRating.indexOf(x)));
		System.out.println("-CERTIFICATION TABLE POPULATED");

	}

	private void waitFiveSecsBeforeMakingRequests() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void populateDBWithCertifications(int index) {
		certification = new Certification();
		certification.setName(movieRating.get(index));
		certification.setDescription(movieRatingDescription.get(index));

		certificationRepository.insert(certification);
	}
}
