package com.qa.cinemas.component;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import com.qa.cinemas.domain.UsersModel;
import com.qa.cinemas.repository.UserRepository;

@Component
public class CustomUserDetailsService implements UserDetailsService {

	 @Autowired
	  private UserRepository repository;

	  @Override
	  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	    UsersModel user = repository.findByEmail(username);
	    System.out.println(user);
	    if(user == null) {
	      throw new UsernameNotFoundException("User not found");
	    }

	    List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));

	    return new User(user.getEmail(), user.getPassword(), authorities);
	  }
}

