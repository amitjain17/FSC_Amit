package com.fsc_foodDeliveryApp.foodModel;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodModelRepository extends MongoRepository<FoodModel, String> {

}
