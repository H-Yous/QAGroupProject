package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.UsersModel;

public interface UserRepository extends MongoRepository<UsersModel, String> {

    UsersModel findByEmail(String email);

}