package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.domain.Certification;

public interface CertificationRepository extends MongoRepository<Certification, String> {

}
