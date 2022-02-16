package com.fsc_foodDeliveryApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsc_foodDeliveryApp.models.AuthenticationRequest;
import com.fsc_foodDeliveryApp.models.AuthenticationResponse;
import com.fsc_foodDeliveryApp.models.UserModel;
import com.fsc_foodDeliveryApp.models.UserRepository;

@RestController
public class AuthController {

	@Autowired
	private UserRepository repo;
	
	@Autowired
	public AuthenticationManager authenticationManager;
	
	@PostMapping("/subs")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest){
		
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		
		UserModel userModel = new UserModel();
		userModel.setUsername(username);
		userModel.setPassword(password);
		try {
			repo.save(userModel);
			
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error "+username));
		}
		
		return ResponseEntity.ok(new AuthenticationResponse("Success "+username));
		
	}
	

	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest){
	
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error Authenticate "+username));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Success Authenticate "+username));

	}
}
