package com.qa.cinemas.controller;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.Certification;
import com.qa.cinemas.service.CertificationService;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.getCertificationsPath;
@RestController
@RequestMapping("/api")
@CrossOrigin(crossOriginsPath)
public class CertificationController {
	
	@Autowired
	private CertificationService certificationService;

	@GetMapping(getCertificationsPath)
	public ResponseEntity<?> getCertifications() {
		List<Certification> result = certificationService.findAll();
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	

}
