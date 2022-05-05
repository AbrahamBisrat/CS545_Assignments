package com.spring.assignmentOne.filter;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter{// extends OncePerRequestFilter {

//    private  final JwtTokenUtil jwtTokenUtil;
//    private final UserDetailsService userDetailsService;
//
//
//    public JwtFilter(JwtTokenUtil jwtTokenUtil, UserDetailsService userDetailsService) {
//        this.jwtTokenUtil = jwtTokenUtil;
//        this.userDetailsService = userDetailsService;
//    }
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//                    throws ServletException, IOException {
//        System.out.println("Filter is being applied here");
//        final String authorizationHeader = request.getHeader("Authorization");
//        String email = null;
//        String token = null;
//
//        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//            token = authorizationHeader.substring(7);
//            try{
//                email = jwtTokenUtil.getUsernameFromToken(token);
//            }catch (ExpiredJwtException e){ // TODO come back here!
//                String isRefreshToken = request.getHeader("isRefreshToken");
//            }
//
//        }
//
//        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            var userDetails = userDetailsService.loadUserByUsername(email);
//            boolean isTokenValid = jwtTokenUtil.validateToken(token);
//            if (isTokenValid) {
//                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                        userDetails, null, userDetails.getAuthorities());
//
//                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
}
