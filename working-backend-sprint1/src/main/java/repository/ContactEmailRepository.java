package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.ContactEmail;

public interface ContactEmailRepository extends MongoRepository<ContactEmail, String> {

}
