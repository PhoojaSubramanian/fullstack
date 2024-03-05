package com.home_care_services.phooja.service;

import com.home_care_services.phooja.dto.request.ForgotPasswordRequest;
import com.home_care_services.phooja.dto.request.LoginRequest;
import com.home_care_services.phooja.dto.request.RegisterRequest;
import com.home_care_services.phooja.dto.response.ForgotPasswordResponse;
import com.home_care_services.phooja.dto.response.LoginResponse;
import com.home_care_services.phooja.dto.response.RegisterResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
    
}