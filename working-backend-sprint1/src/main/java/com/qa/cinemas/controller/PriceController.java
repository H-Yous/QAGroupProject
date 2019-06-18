package com.qa.cinemas.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.normAdult;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.normChild;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.normStudent;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.premAdult;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.premChild;
import static com.qa.cinemas.constants.PROJ_CONSTANTS.premStudent;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.qa.cinemas.constants.PROJ_CONSTANTS.disabledTicket;

@RequestMapping
@RestController
@CrossOrigin("http://localhost:3000")

public class PriceController{
    
    public PriceController(){
        
    }

    @GetMapping("/pricing")
    public List sendPriceList(){
        List<Integer> priceList = new ArrayList<Integer>();
        Collections.addAll(priceList, normAdult, normChild, normStudent, premAdult, premChild, premStudent, disabledTicket);
        System.out.print(priceList);
        return priceList;
    }

    



}