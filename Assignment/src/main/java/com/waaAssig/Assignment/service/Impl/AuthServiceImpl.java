package com.waaAssig.Assignment.service.Impl;

import com.waaAssig.Assignment.config.JwtTokenUtil;
import com.waaAssig.Assignment.model.JwtRequest;
import com.waaAssig.Assignment.model.JwtResponse;
import com.waaAssig.Assignment.service.AuthService;
import com.waaAssig.Assignment.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Override
    public JwtResponse login(JwtRequest authRequest) throws Exception {
        authenticate(authRequest.getUsername(), authRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        final String refreshToken = jwtTokenUtil.generateRefreshToken(authRequest.getUsername());

        return new JwtResponse(token, refreshToken);
    }

    @Override
    public JwtResponse refreshToken(JwtResponse refreshRequest) {
        // check authenticity and validity
        String tokenOwner = jwtTokenUtil.getUsernameFromToken(refreshRequest.getAccessToken());
        final UserDetails userDetails = userDetailsService.loadUserByUsername(tokenOwner);

        boolean isTokenValid = jwtTokenUtil.validateToken(refreshRequest.getRefreshToken(),
                userDetails);

        if(isTokenValid) {
            boolean hasAccessExpired =
                    jwtTokenUtil.getExpirationDateFromToken(refreshRequest.getAccessToken())
                            .before(new Date());
            if(!hasAccessExpired) return refreshRequest;

            // token is authentic and expired, let's give him/her a new one
            final String accessToken = jwtTokenUtil.generateToken(userDetails);
            final String refreshToken = jwtTokenUtil.generateRefreshToken(userDetails.getUsername());

            return new JwtResponse(accessToken, refreshToken);
        }

        return null;
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
