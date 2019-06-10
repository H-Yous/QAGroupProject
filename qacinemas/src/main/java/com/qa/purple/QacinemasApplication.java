package com.qa.purple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.qa.purple.models.Movie;
import com.qa.purple.repositories.MovieRepository;

@SpringBootApplication
public class QacinemasApplication implements CommandLineRunner {

	@Autowired
	private MovieRepository movieRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(QacinemasApplication.class, args);
	}
	
	@Override
	public void run(String... args)throws Exception{
		movieRepository.deleteAll();
		
		movieRepository.save(new Movie("tt1234567", "The Bourne Identity", "12A", "Shafeeq's favourite"));
		movieRepository.save(new Movie("tt1234568", "The Bourne Supremacy", "12A", "Shafeeq's 2nd favourite"));
		movieRepository.save(new Movie("tt1234569", "The Bourne Ultimatum", "12A", "Shafeeq's 3rd favourite"));
		movieRepository.save(new Movie("tt1234570", "Jason Bourne", "12A", "Shafeeq's favourite"));
		
		System.out.println("Movies found with FindAll()");
		System.out.println("---------------------------");
		for (Movie movie : movieRepository.findAll()) {
			System.out.println(movie);
		}
		System.out.println();
		
		System.out.println("Movie found with findById('tt1234567')");
		System.out.println("--------------------------------");
		System.out.println(movieRepository.findById("tt1234567"));
		
		System.out.println("Movie found with findById('tt1234568')");
		System.out.println("--------------------------------");
		System.out.println(movieRepository.findById("tt1234568"));
	}
	
}
