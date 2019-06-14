package com.qa.cinemas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.cinemas.domain.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String role);
}