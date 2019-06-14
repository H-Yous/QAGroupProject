package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

}