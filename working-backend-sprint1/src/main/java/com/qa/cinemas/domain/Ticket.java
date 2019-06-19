package com.qa.cinemas.domain;


<<<<<<< HEAD


public class Ticket{
    
=======
public class Ticket{


    private String title;
    private String type;
    private int price;
    private String seat;

    @Override
    public String toString(){
        return title + ", " + type + ", " + price + ", " + seat + ", ";
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



>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
}