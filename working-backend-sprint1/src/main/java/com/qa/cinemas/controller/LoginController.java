package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.eventsPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.loginPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.signUpPath;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.qa.cinemas.domain.User;
import com.qa.cinemas.component.CustomUserDetailsService;

@Controller
@RequestMapping(eventsPath)
@CrossOrigin(crossOriginsPath)
public class LoginController {
	
	@Autowired
	private CustomUserDetailsService userService;
	

}
