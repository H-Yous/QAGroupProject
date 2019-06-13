package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
