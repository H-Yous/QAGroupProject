package com.qa.cinemas;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import seatsio.SeatsioClient;
import seatsio.events.Event;

import static com.qa.cinemas.constants.Constants.seatsIoApiKey;



public class ChartEventService {

    private String secretKey = seatsIoApiKey;
    private String chartKey;
    private String eventKey;
    private SeatsioClient client;
    private String[] seatsObject;

    public ChartEventService(){

    }
    public ChartEventService(String secretKey, String chartKey, String eventKey) {
        this.secretKey = secretKey;
        this.chartKey = chartKey;
        this.eventKey = eventKey;
        client = new SeatsioClient(this.secretKey);

    }

    public String createEvent(String eventKey) {
        this.client.events.create(this.chartKey, eventKey);

        return "Created Event";
    }

    public String deleteEvent(String eventKey){
        this.client.events.delete(eventKey);
        this.client.events.listAll().count();

        return "Deleted Event";
    }

    public int countEvents(){
        return (int) this.client.events.listAll().count();
    }

    public void bookObjects(String[] object) {
        List<String> bookSeats = new ArrayList<String>();
        Collections.addAll(bookSeats, object);
        System.out.println(bookSeats);
        // client.events.book(this.eventKey, bookSeats);
    }

    public String getSecretKey() {
        return secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    public String getChartKey() {
        return chartKey;
    }

    public void setChartKey(String chartKey) {
        this.chartKey = chartKey;
    }

    public String getEventKey() {
        return eventKey;
    }

    public void setEventKey(String eventKey) {
        this.eventKey = eventKey;
    }

    public SeatsioClient getClient() {
        return client;
    }

    public void setClient() {
        this.client = new SeatsioClient(this.secretKey);
    }
}