package com.amitjain.quoteForm.resource;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_data")
public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	
	@Column(name="fName")
	public String fname;
	
	@Column(name="lName")
	public String lname;
	
	public String email;
	public String phoneNumber;
	public String projectType;
	public String estimatedBudget;
	public String timeFrame;
	public String projectDetails;
	public String moment;
	public String image;
	
	
	public Student() {
		super();
	}
	public Student(int id, String fname, String lname, String email, String phoneNumber, String projectType,
			String estimatedBudget, String timeFrame, String projectDetails, String moment, String image) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.projectType = projectType;
		this.estimatedBudget = estimatedBudget;
		this.timeFrame = timeFrame;
		this.projectDetails = projectDetails;
		this.moment = moment;
		this.image = image;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getProjectType() {
		return projectType;
	}
	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}
	public String getEstimatedBudget() {
		return estimatedBudget;
	}
	public void setEstimatedBudget(String estimatedBudget) {
		this.estimatedBudget = estimatedBudget;
	}
	public String getTimeFrame() {
		return timeFrame;
	}
	public void setTimeFrame(String timeFrame) {
		this.timeFrame = timeFrame;
	}
	public String getProjectDetails() {
		return projectDetails;
	}
	public void setProjectDetails(String projectDetails) {
		this.projectDetails = projectDetails;
	}
	public String getMoment() {
		return moment;
	}
	public void setMoment(String moment) {
		this.moment = moment;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", phoneNumber="
				+ phoneNumber + ", projectType=" + projectType + ", estimatedBudget=" + estimatedBudget + ", timeFrame="
				+ timeFrame + ", projectDetails=" + projectDetails + ", moment=" + moment + ", image=" + image + "]";
	}
	
}
