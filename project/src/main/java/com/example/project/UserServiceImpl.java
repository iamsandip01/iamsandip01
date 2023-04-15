package com.example.project;

import java.awt.image.DataBuffer;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	CustomerUserDetailsService customerUserDetailsService;
	
	@Autowired
	JwtUtil jwtUtil;
	
	@Override
	public ResponseEntity<String> signUp(Map<String, String> requestMap) {
		log.info("Inside SignUp {}",requestMap);
		try {
			if (validateSignUpMap(requestMap)) {
				User user = userDao.findByEmailId(requestMap.get("email"));
				if (Objects.isNull(user)) {
					userDao.save(getUserFromMap(requestMap));
					return DBUtils.getResponseEntity("Successfully Registered", HttpStatus.OK);
				} else {
					return DBUtils.getResponseEntity("Email already exits:", HttpStatus.BAD_REQUEST);
				}
			} else {
				return DBUtils.getResponseEntity("Invalid Data", HttpStatus.BAD_REQUEST);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return DBUtils.getResponseEntity("Something Went Wrong", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	private boolean validateSignUpMap(Map<String,String> requestMap) {
		if(requestMap.containsKey("name") && requestMap.containsKey("contact") && requestMap.containsKey("email") && requestMap.containsKey("password")) {
			return true;
		}
		return false;
	}

	private User getUserFromMap(Map<String,String>requestMap) {
		User user = new User();
		user.setName(requestMap.get("name"));
		user.setContact(requestMap.get("contact"));
		user.setEmail(requestMap.get("email"));
		user.setPassword(requestMap.get("password"));
		user.setStatus("false");
		user.setRole("user");
		return user;
	}

	@Override
	public ResponseEntity<String> login(Map<String, String> requestMap) {
		log.info("Inside Login");
		try {
			org.springframework.security.core.Authentication auth = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(requestMap.get("email"), requestMap.get("password")));
			if(auth.isAuthenticated()) {
				if(customerUserDetailsService.getUserDetail().getStatus().equalsIgnoreCase("true")) {
					return new ResponseEntity<String>("{\"token\":\""+
				jwtUtil.generateToken(customerUserDetailsService.getUserDetail().getEmail(),
						customerUserDetailsService.getUserDetail().getRole()) +"\"}",
							HttpStatus.OK);
				}
				else {
					return new ResponseEntity<String>("{\"message\":\""+"Wait for admin approval."+"\"}",HttpStatus.BAD_REQUEST);
				}
			}
		}catch(Exception ex) {
			log.error("{}",ex);
		}
		return new ResponseEntity<String>("{\"message\":\""+"Bad Credentials."+"\"}",HttpStatus.BAD_REQUEST);

	}
}
