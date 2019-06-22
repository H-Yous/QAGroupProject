package com.qa.cinemas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.Certification;
import com.qa.cinemas.repository.CertificationRepository;

@Service
public class CertificationServiceImpl implements CertificationService {

	@Autowired
	private CertificationRepository certificationRepository;

	@Override
	public List<Certification> findAll() {
		return certificationRepository.findAll();
	}

}
