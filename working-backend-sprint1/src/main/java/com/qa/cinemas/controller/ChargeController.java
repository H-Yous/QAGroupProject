package com.qa.cinemas.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.domain.StripeToken;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

import lombok.extern.java.Log;

import static com.qa.cinemas.constants.Constants.stripeApiKey;

@Log
@RestController
@CrossOrigin("*")
public class ChargeController {

	int intTotal;
	String showMovie;

	@PostMapping("/charge")
	public void charge(@RequestBody String token) throws StripeException {
		// System.out.print(token);

		Stripe.apiKey = stripeApiKey;

		Map<String, Object> params = new HashMap<>();
		params.put("amount", intTotal);
		params.put("currency", "gbp");
		params.put("description", "Example charge");
		params.put("source", token);
		Charge charge = Charge.create(params);

	}

	@PostMapping("/total")
	public void total(@RequestBody String total) {
		JSONObject json = new JSONObject(total);
		intTotal = json.getInt("total");
		intTotal = (intTotal * 100);
		System.out.print(intTotal);
	}

	@GetMapping("/gettotal")
	public int gettotal() {
		int getTotal = intTotal / 100;
		System.out.print(intTotal);
		return getTotal;
	}

}