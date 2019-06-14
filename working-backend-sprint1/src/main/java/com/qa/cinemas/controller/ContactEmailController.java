package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.contactGmailPath;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.contactGmailServer;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.sendEmail;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qa.cinemas.domain.ContactEmail;
import com.qa.cinemas.service.ContactEmailServiceImpl;

@RequestMapping(contactGmailPath)
@Controller
@CrossOrigin(contactGmailServer)
public class ContactEmailController{
	@Autowired
	private ContactEmailServiceImpl contactEmailServiceImpl;
	
	@RequestMapping(sendEmail)
	@ResponseBody
	public ResponseEntity<?> sendEmail(@Valid @RequestBody ContactEmail email) throws Exception {
		String result=contactEmailServiceImpl.sendEmail(email);
		return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}
