package com.qa.cinemas;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfDays;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfEvents;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfScreens;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.numberOfTimeSlots;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.screenOne;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.screenThree;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.screenTwo;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

import com.qa.cinemas.domain.Events;
import com.qa.cinemas.enums.Days;
import com.qa.cinemas.enums.Screens;
import com.qa.cinemas.enums.TimeSlots;
import com.qa.cinemas.service.ChartEventService;
import com.qa.cinemas.service.EventServiceImpl;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

	private Events eventToBeSaved;
	private ChartEventService chartEventService;

	@Autowired
	private EventServiceImpl eventServiceImpl;

<<<<<<< HEAD
	@Autowired
	private PopulateUpcomingMovies populateUpComingMovies;

=======
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
	@Autowired
	PopulateNowShowingMovies populateNowShowingMovies;

	@Autowired
	PopulateNewReleaseMovies populateNewReleaseMovies;

	@Autowired
	PopulateMovieCertifications populateMovieCertification;

	@Override
	public void onApplicationEvent(final ApplicationReadyEvent event) {
<<<<<<< HEAD
<<<<<<< HEAD
		System.out.println("APPLICATION RUNNING STARTUP");
		populateEvents();

		if (getCollectionSize("QACinema", "upcomingMovie") == 0) {
			deleteCollection("QACinema", "upcomingMovie");
			populateUpComingMovies.start();
			System.out.println("APPLICATION POPULATING UPCOMING MOVIES");
		} else {
			System.out.println("UPCOMNGMOVIES COLLECTION DETECTED, NOT POPULATING");
		}

		if (getCollectionSize("QACinema", "nowShowingMovie") == 0) {
			deleteCollection("QACinema", "nowShowingMovie");
			System.out.println("APPLICATION POPULATING NOWSHOWING MOVIES");
			waitTenSecsBeforeMakingRequests();
			populateNowShowingMovies.start();
		} else {
			System.out.println("NOWSHOWING MOVIES COLLECTION DETECTED, NOT POPULATING");
		}

		if (getCollectionSize("QACinema", "newReleaseMovie") == 0) {
			deleteCollection("QACinema", "newReleaseMovie");
			System.out.println("APPLICATION POPULATING NEWRELEASES MOVIES");
			waitTenSecsBeforeMakingRequests();
			populateNewReleaseMovies.start();

		} else {
			System.out.println("NEWRELEASES MOVIES COLLECTION DETECTED, NOT POPULATING");
		}

		if (getCollectionSize("QACinema", "certification") != 5) {
			deleteCollection("QACinema", "certification");
			System.out.println("APPLICATION POPULATING CERTIFICATIONS");
			waitTenSecsBeforeMakingRequests();
			populateMovieCertification.start();
		} else {
			System.out.println("CERTIFICATION MOVIES COLLECTION DETECTED, NOT POPULATING");
		}
=======
		//new releases
		System.out.println("POPULATING UPCOMING MOVIES...");
		populateUpComingMovies.start();
=======
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

		System.out.println("APPLICATION RUNNING STARTUP");
		populateEvents();

		if (getCollectionSize("QACinema", "nowShowingMovie") == 0) {
			deleteCollection("QACinema", "nowShowingMovie");
			System.out.println("APPLICATION POPULATING NOWSHOWING MOVIES");
			waitTenSecsBeforeMakingRequests();
			populateNowShowingMovies.start();
		} else {
			System.out.println("NOWSHOWING MOVIES COLLECTION DETECTED, NOT POPULATING");
		}

		if (getCollectionSize("QACinema", "newReleaseMovie") == 0) {
			deleteCollection("QACinema", "newReleaseMovie");
			System.out.println("APPLICATION POPULATING NEWRELEASES MOVIES");
			waitTenSecsBeforeMakingRequests();
			populateNewReleaseMovies.start();

		} else {
			System.out.println("NEWRELEASES MOVIES COLLECTION DETECTED, NOT POPULATING");
		}

<<<<<<< HEAD
		System.out.println("POPULATING MOVIE CLASSIFICATIONS...");
		populateMovieCertification.start();
>>>>>>> 1d17771ac88b5f72db4426a48dd9caf43cfd8a5c
=======
		if (getCollectionSize("QACinema", "certification") != 5) {
			deleteCollection("QACinema", "certification");
			System.out.println("APPLICATION POPULATING CERTIFICATIONS");
			waitTenSecsBeforeMakingRequests();
			populateMovieCertification.start();
		} else {
			System.out.println("CERTIFICATION MOVIES COLLECTION DETECTED, NOT POPULATING");
		}
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

		System.out.println("STARTUP FINISHED");
	}

<<<<<<< HEAD
	private long getCollectionSize(String databaseCollectionIsIn, String collectionToBeDeleted) {
		MongoClient mongoClient = new MongoClient(new ServerAddress("localhost", 27017));
		MongoDatabase database = mongoClient.getDatabase(databaseCollectionIsIn);
		MongoCollection collection = database.getCollection(collectionToBeDeleted);
		return collection.countDocuments();
	}

	private void deleteCollection(String databaseCollectionIsIn, String collectionToBeDeleted) {
		MongoClient mongoClient = new MongoClient(new ServerAddress("localhost", 27017));
		MongoDatabase database = mongoClient.getDatabase(databaseCollectionIsIn);
		MongoCollection collection = database.getCollection(collectionToBeDeleted);
		Bson filter = new Document();
		collection.deleteMany(filter);
	}
=======
	
>>>>>>> 1d17771ac88b5f72db4426a48dd9caf43cfd8a5c

	private void waitTenSecsBeforeMakingRequests() {
		try {
			Thread.sleep(10000);
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

			chartEventService = new ChartEventService();

			chartEventService.setClient();
			for (int i = 0; i < numberOfDays; i++) {
				eventToBeSaved.setDay(Days.values()[i]);
				for (int j = 0; j < numberOfScreens; j++) {
					eventToBeSaved.setScreen(Screens.values()[j]);
					switch (j + 1) {
					case 1:
						chartEventService.setChartKey(screenOne);
						break;

					case 2:
						chartEventService.setChartKey(screenTwo);
						break;

					case 3:
						chartEventService.setChartKey(screenThree);
						break;
					}
					for (int k = 0; k < numberOfTimeSlots; k++) {
						eventToBeSaved.setTimeSlot(TimeSlots.values()[k]);
						eventToBeSaved.setEventKey((i + 1) + "-" + (j + 1) + "-" + (k + 1));
						eventToBeSaved.setId(eventToBeSaved.getId() + 1);
						if ((eventServiceImpl.findByEventKey(eventToBeSaved.getEventKey())).isPresent()) {
							System.out.println("event key detected, not saving");
						} else {
							System.out.println("saving event: " + eventToBeSaved);
							eventServiceImpl.createEvent(eventToBeSaved);
							// create event in io Humza Job
						}

						try {
							String eventKey = eventToBeSaved.getEventKey();
							chartEventService.createEvent(eventKey);
							System.out.println("Event Created on SeatsIO");
						} catch (Exception e) {

							System.out.println(e);
							System.out.println("Event Not Created on Seatsio");
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
