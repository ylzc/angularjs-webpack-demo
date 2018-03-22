package com.example.webpackdemo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class testController {

    @RequestMapping("/hello")
    public Map Hello() {
        Map<String, String> map1 = new HashMap<String, String>();

        map1.put("name", "Alexia");
        map1.put("sex", "female");
        map1.put("age", "23");

        return map1;
    }
}