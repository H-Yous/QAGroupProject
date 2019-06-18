package com.qa.cinemas.controller;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.crossOriginsPath;

import com.qa.cinemas.domain.ChosenSeats;
import com.qa.cinemas.service.ChartEventService;

@RestController
@CrossOrigin("*")
public class ChosenSeatsController{


    ChartEventService chartEvent = new ChartEventService();
    private String token;

    @PostMapping("/holdToken")
    public String getToken(@RequestBody String object){
        JSONObject holdtoken = new JSONObject(object);

        token = holdtoken.getString("token");
        return "Got token";
    }


    @PostMapping("/bookthis")
	public String addSeats(@RequestBody String object){
        chartEvent.setEventKey("1-1-1");
        JSONObject seats = new JSONObject(object);
       
       
        
        chartEvent.bookObjects(seats.getString("seats"), token);

        
		return "seatBooked";
	}
}