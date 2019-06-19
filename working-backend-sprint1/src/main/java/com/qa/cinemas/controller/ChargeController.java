package com.qa.cinemas.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.domain.stripeToken;
import com.stripe.Stripe;
import com.stripe.exception.CardException;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

import lombok.extern.java.Log;

@Log
@RestController
@CrossOrigin("*")
public class ChargeController {

	int intTotal; 
<<<<<<< HEAD
=======
	String showMovie; 
	String customerEmail; 
	String customerFname;
	String customerLname;
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
	
    @PostMapping("/charge")
    public void charge(@RequestBody String token) throws StripeException {
    	//System.out.print(token);
    
<<<<<<< HEAD
    	Stripe.apiKey = "sk_test_QCwagkwuRqvO88QBgFcDwpCp00pZO514Zd";

    	
    	Map<String, Object> params = new HashMap<>();
    	params.put("amount", intTotal);
    	params.put("currency", "gbp");
    	params.put("description", "Example charge");
    	params.put("source", token);
    	Charge charge = Charge.create(params);
=======
    	Stripe.apiKey = stripeApiKey;
    	try { 		
    		Map<String, Object> params = new HashMap<>();
        	
        	params.put("amount", intTotal);
        	params.put("currency", "gbp");
        	params.put("description", "QaCinema Ticket");
        	params.put("source", token);
        	params.put("statement_descriptor", "QaCinema");
        	params.put("receipt_email", customerEmail);
        	Charge charge = Charge.create(params);
    		} catch (CardException e) {
    		 
    		  System.out.println("Status is: " + e.getCode());
    		  System.out.println("Message is: " + e.getMessage());
    		}
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
    	
    }
    
    @PostMapping("/total")
    public void total(@RequestBody String total) {
    	JSONObject json = new JSONObject(total);
    	intTotal = json.getInt("total"); 
    	intTotal = (intTotal * 100); 
    	System.out.print(intTotal);
    }
    
<<<<<<< HEAD
=======
    @PostMapping("/sendEmail")
    public void email(@RequestBody String email) {
    	
    	JSONObject json = new JSONObject(email);
    	
    	customerEmail = json.getString("email"); 
    	customerFname = json.getString("firstname"); 
    	customerLname = json.getString("surname");
    	
    	
    	
    }
    
    @GetMapping("/gettotal")
    public int gettotal() {
    	int getTotal = intTotal / 100; 
    	System.out.print(intTotal);
    	return getTotal; 
    }
    
    @GetMapping("/getname")
    public String getName() {
    	String fullname = customerFname + " " +customerLname; 
        
		return fullname;
    	
    }
    
    @GetMapping("/getemail")
    public String getEmail() {
    	String email = customerEmail; ; 
        
		return email; 
    	
    }
    
  
    
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
    
    
    
}