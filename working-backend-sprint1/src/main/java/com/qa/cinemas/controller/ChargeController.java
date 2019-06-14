package com.qa.cinemas.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.stripeToken;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

import lombok.extern.java.Log;

@Log
@RestController
@CrossOrigin("*")
public class ChargeController {


    @PostMapping("/charge")
    public void charge(@RequestBody String token) throws StripeException {
    	System.out.print(token);
    	Stripe.apiKey = "stripe-api";

    	
    	Map<String, Object> params = new HashMap<>();
    	params.put("amount", 1000);
    	params.put("currency", "gbp");
    	params.put("description", "Example charge");
    	params.put("source", token);
    	Charge charge = Charge.create(params);
 
    }
    
}