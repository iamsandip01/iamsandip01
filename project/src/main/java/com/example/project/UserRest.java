package com.example.project;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path ="/user")
@CrossOrigin(origins ="http://localhost:4200")
public interface UserRest {

	@PostMapping(path ="/login")
	public ResponseEntity<String> login(@RequestBody(required = true) Map<String,String>requestMap);

	
	@PostMapping(path ="/signup")
	public ResponseEntity<String> signup(@RequestBody(required = true) Map<String,String>requestMap);
}
