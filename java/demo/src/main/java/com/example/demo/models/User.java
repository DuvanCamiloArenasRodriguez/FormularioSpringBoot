package com.example.demo.models;

public class User {
    private String name;
    private String lastName;
    private String profession;


    public User(String name, String lastName, String profession) {
        this.name = name;
        this.lastName = lastName;
        this.profession = profession;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
}

