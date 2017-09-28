package com.giustini.sbastarter.models;

public class Dummy {

    private Long id;

    private String message;

    public Dummy() {
        message = "I'm a dummy object";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
