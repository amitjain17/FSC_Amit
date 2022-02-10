package com.amitjain.quoteForm.resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.amitjain.quoteForm.repository.StudentRepository;

@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RestController
public class StudentResource {
	
	@Autowired
	StudentRepository repo;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("student")
	public List<Student> getStudent(){
		
	List<Student> st = (List<Student>)repo.findAll();
	
//	Student s1 = new Student();
//	s1.setFname("amit");
//	s1.setLname("Jain");
//	s1.setEmail("amitjain");
//	s1.setPhoneNumber(9873);
//	s1.setEstimatedBudget(100000);
//	s1.setProjectDetails("hsfbdhwemnfb");
//	s1.setProjectType("adnhyuasdbnqbdyrqw");
//	s1.setTimeFrame(2);
//
//	repo.save(s1);
	
	return st;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("student/{id}")
	public Student getStudentById(@PathVariable(value="id") Integer studentId) throws Exception {
		
		Student st = (Student) repo.findById(studentId).orElse(new Student(0,"Not Found","Not Found","Not Found","","","","Not Found","","","Not Found"));
		return st;	
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("student")
	public Student setStudent(@RequestBody Student st) {
		repo.save(st);
	
		List<Student> resendData = (List<Student>)repo.findAll();
		return st;			
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("student/{id}")
	public Map<String,Boolean> deleteStudent(@PathVariable(value="id") Integer studentId) throws Exception {

		if(repo.findById(studentId) != null) {
			repo.deleteById(studentId);
		}
		else {
			throw new Exception("Student not found for this id :: " + studentId);
		}
	    
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("Deleted", Boolean.TRUE);
	    
	    return response;
	}

	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("student/{id}")
	public Student updateStudent(@PathVariable(value="id") Integer studentId, @RequestBody Student studentData) {
		
		 Student student = repo.findById(studentId).orElse(new Student(0,"Not Found","","","Not Found","Not Found","","Not Found","","","Not Found"));

		 student.setFname(studentData.getFname());
		 student.setLname(studentData.getLname());
		 student.setEmail(studentData.getEmail());
		 student.setPhoneNumber(studentData.getPhoneNumber());
		 student.setEstimatedBudget(studentData.getEstimatedBudget());
		 student.setProjectDetails(studentData.getProjectDetails());
		 student.setTimeFrame(studentData.getTimeFrame());
		 student.setProjectType(studentData.getProjectType());
		 
		 final Student updatedStudent = repo.save(student);
		
		return updatedStudent;
	}
	
}
