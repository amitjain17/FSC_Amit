package com.fsc_foodDeliveryApp.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fsc_foodDeliveryApp.model.UserModel;
import com.fsc_foodDeliveryApp.model.UserRepository;

@Service
public class UserServices implements UserDetailsService{
	
	@Autowired
	private UserRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


		UserModel foundedUser = repo.findByUsername(username);
		if(foundedUser == null) return null;
		
		String name = foundedUser.getUsername();
		String pwd = foundedUser.getPassword();
		
		return new User(name,pwd,new ArrayList<>());
	}
	
	

}
