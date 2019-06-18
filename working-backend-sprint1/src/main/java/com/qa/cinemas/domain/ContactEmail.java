package com.qa.cinemas.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "Emails")
public class ContactEmail {
	
	private String enquirerEmail;
	
	private String emailText;

	public String getEnquirerEmail() {
		return enquirerEmail;
	}

	public void setEnquirerEmail(String enquirerEmail) {
		this.enquirerEmail = enquirerEmail;
	}

	public String getEmailText() {
		return emailText;
	}

	public void setEmailText(String emailText) {
		this.emailText = emailText;
	}

	@Override
	public String toString() {
		return "ContactEmail [enquirerEmail=" + enquirerEmail + ", emailText=" + emailText + "]";
	}
}
