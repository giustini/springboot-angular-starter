package com.giustini.sbastarter.models;

public class Car {

    private String plate;

    private Integer year;

    private String brand;

    private String color;

    public Car() {
    }

    public Car(String plate, Integer year, String brand, String color) {
        this.plate = plate;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
