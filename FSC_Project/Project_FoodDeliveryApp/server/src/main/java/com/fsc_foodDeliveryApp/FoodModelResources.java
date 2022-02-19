package com.fsc_foodDeliveryApp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsc_foodDeliveryApp.foodModel.FoodModel;
import com.fsc_foodDeliveryApp.foodModel.FoodModelRepository;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class FoodModelResources {
	
	@Autowired
	private FoodModelRepository frepo;
	
	@GetMapping("/")
	@ResponseBody
	public String start() {
		
		return "Food Delivery App Started";
		
	}
	@GetMapping("/food")
	public List<FoodModel> getFoodDetails() {
		
		return frepo.findAll();
	}

	@PostMapping("/food")
	public FoodModel setFoodDetails(@RequestBody FoodModel foodDetail) {
		
		return frepo.save(foodDetail);
	}
}
