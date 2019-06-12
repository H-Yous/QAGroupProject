package qacinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import qacinemas.models.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
