package com.fsc_foodDeliveryApp.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fsc_foodDeliveryApp.models.UserModel;
import com.fsc_foodDeliveryApp.models.UserRepository;

@Service
public class UserServices implements UserDetailsService {

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
