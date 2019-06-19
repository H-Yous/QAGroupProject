package com.qa.cinemas.service;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.emailReceiver;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.emailSubject;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;

import com.qa.cinemas.domain.ContactEmail;

@Controller
public class ContactEmailServiceImpl implements ContactEmailService {
	@Autowired
	public JavaMailSender javaMailSender;

	public String sendEmail(ContactEmail email) throws Exception {
		try {
			MimeMessage message = javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);

			helper.setTo(emailReceiver);
			helper.setText("sent from:" + email.getEnquirerEmail() + "\n\n\n" + email.getEmailText());
			helper.setSubject(emailSubject + email.getEnquirerEmail());

			javaMailSender.send(message);

			return ("Email Sent!");

		} catch (Exception e) {
			return ("Email failed to send: " + e);
		}
	}
}
