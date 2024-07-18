package com.example.demo.controllers;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @PostMapping("/post")
    public User post(@RequestBody User user) {

        return user;
    }
}
