package com.fsc_foodDeliveryApp.foodModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "FoodDetails")
public class FoodModel {
	
	@Id
	private String id;
	private String heading;
	private String image;
	private String amount;
	private String variants;
	
	public FoodModel() {
		
	}
	public String getId() {
		return id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getVariants() {
		return variants;
	}
	public void setVariants(String variants) {
		this.variants = variants;
	}
	
	
	
}
