package com.waaAssig.Assignment.service;

import com.waaAssig.Assignment.model.JwtRequest;
import com.waaAssig.Assignment.model.JwtResponse;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {

    JwtResponse login(JwtRequest authRequest) throws Exception;

    JwtResponse refreshToken(JwtResponse refreshRequest);

}
