package com.ktrn.mgateway.controller;

import org.apache.log4j.Logger;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {
	Logger log = Logger.getLogger(LoginController.class);
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String loginView(){
		log.info("Login View Call Success");
		return "login";
	}
	
	@RequestMapping(value="/login.do")
	public String login(){
		log.info("Login Success");
		return "redirect:/PayMonitoring/selectAll.do";
	}
}
