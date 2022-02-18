package com.fsc_foodDeliveryApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsc_foodDeliveryApp.model.AuthenticateResponse;
import com.fsc_foodDeliveryApp.model.AuthenticationRequest;
import com.fsc_foodDeliveryApp.model.UserModel;
import com.fsc_foodDeliveryApp.model.UserRepository;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class AuthController {

	@Autowired
	private UserRepository repo;
	
	@Autowired
	public AuthenticationManager authenticationManager;
	
	@PostMapping("/subs")
	public ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationrequest) {
		String username = authenticationrequest.getUsername();
		String password = authenticationrequest.getPassword();
		
		if(repo.findByUsername(username)!=null) {
			return ResponseEntity.ok(new AuthenticateResponse("SignUpError"));
		}
		
		BCryptPasswordEncoder PasswordEncoder = new BCryptPasswordEncoder();
		String EncodedPassword = PasswordEncoder.encode(password);
		
		UserModel usermodel = new UserModel();
		usermodel.setUsername(username);
		usermodel.setPassword(EncodedPassword);
		try {
			repo.save(usermodel);
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticateResponse("SignUpError "+username));
		}
		return ResponseEntity.ok(new AuthenticateResponse("Success "+username));

	}
	
	@PostMapping("/auth")
	public ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationrequest) {
		String username = authenticationrequest.getUsername();
		String password = authenticationrequest.getPassword();
	
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticateResponse("Error "+username));
		}
		return ResponseEntity.ok(new AuthenticateResponse("Success "+username));

	
	}
	
	
	
	
	
	
	
	
	
	
}
