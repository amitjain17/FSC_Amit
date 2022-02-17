package com.fsc_foodDeliveryApp.model;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserModel, String> {

	UserModel findByUsername(String username);
}
