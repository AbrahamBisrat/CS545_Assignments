package com.waaAssig.Assignment.controller;

import com.waaAssig.Assignment.model.JwtRequest;
import com.waaAssig.Assignment.model.JwtResponse;
import com.waaAssig.Assignment.model.UserDTO;
import com.waaAssig.Assignment.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthService authService;

	// Registrations
//	@RequestMapping(value = "/register", method = RequestMethod.POST)
//	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
//		return ResponseEntity.ok(userDetailsService.save(user));
//	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest)
			throws Exception {
		return ResponseEntity.ok(authService.login(authenticationRequest));
	}

	@PostMapping("/refreshToken")
	public ResponseEntity<?> refreshToken(@RequestBody JwtResponse refreshTokenRequest) {
		return ResponseEntity.ok(authService.refreshToken(refreshTokenRequest));
	}

}