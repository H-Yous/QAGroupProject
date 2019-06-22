package com.qa.cinemas.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(as = Ticket.class)
public class Ticket {

	private String title;
	private String type;
	private int price;
	private String seat;
	private String token;

	@Override
	public String toString() {
		return "[" + title + ", " + type + ", " + price + ", " + seat + ", " + token + "] " ;
	}

	public Ticket(){
		super();
	}
	public Ticket(String title, String type, int price, String seat, String token){
		this.title = title;
		this.type = type;
		this.price = price;
		this.seat = seat;
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getTitle() {
		return title;
	}

	public String getSeat() {
		return seat;
	}

	public void setSeat(String seat) {
		this.seat = seat;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	

	public void setTitle(String title) {
		this.title = title;
	}

}