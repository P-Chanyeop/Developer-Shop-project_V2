package com.example.develope_mall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VueController {

    @GetMapping("/")
    public String showVueIndex() {
        return "/index.html";
    }

}
