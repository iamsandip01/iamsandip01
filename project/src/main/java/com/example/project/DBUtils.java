package com.example.project;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class DBUtils {
	
	private DBUtils() {
		
	}
	public static ResponseEntity<String> getResponseEntity(String reposnseMessage, HttpStatus httpStatus){
		return new ResponseEntity<String>("{\"message\":\""+reposnseMessage+"\"}",httpStatus);
	}
}
