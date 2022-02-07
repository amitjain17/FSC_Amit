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
	
	@Column(name="FirstName")
	public String fname;
	
	@Column(name="LastName")
	public String lname;
	
	public String email;
	public int phoneNumber;
	public String projectType;
	public int estimatedBudget;
	public int timeFrame;
	public String projectDetails;
	
	
	
	public Student() {
		super();
	}
	public Student(int id, String fname, String lname, String email, int phoneNumber, String projectType,
			int estimatedBudget, int timeFrame, String projectDetails) {
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
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getProjectType() {
		return projectType;
	}
	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}
	public int getEstimatedBudget() {
		return estimatedBudget;
	}
	public void setEstimatedBudget(int estimatedBudget) {
		this.estimatedBudget = estimatedBudget;
	}
	public int getTimeFrame() {
		return timeFrame;
	}
	public void setTimeFrame(int timeFrame) {
		this.timeFrame = timeFrame;
	}
	public String getProjectDetails() {
		return projectDetails;
	}
	public void setProjectDetails(String projectDetails) {
		this.projectDetails = projectDetails;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", phoneNumber="
				+ phoneNumber + ", projectType=" + projectType + ", estimatedBudget=" + estimatedBudget + ", timeFrame="
				+ timeFrame + ", projectDetails=" + projectDetails + "]";
	}
	
	
	
}
