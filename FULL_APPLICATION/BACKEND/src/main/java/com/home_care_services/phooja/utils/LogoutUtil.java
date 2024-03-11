package com.home_care_services.phooja.utils;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import com.home_care_services.phooja.repository.TokenRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LogoutUtil  implements LogoutHandler{
    private final TokenRepository tokenRepository;
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String token;
        if(authHeader == null || !authHeader.startsWith("Bearer"))
        {
            return;
        }
        token = authHeader.substring(7);
        var storedToken = tokenRepository.findByToken(token).orElse(null);
        if(storedToken !=null)
        {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
            SecurityContextHolder.clearContext();
        }
    }
}
