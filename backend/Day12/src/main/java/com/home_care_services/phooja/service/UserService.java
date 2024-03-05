package com.home_care_services.phooja.service;

import com.home_care_services.phooja.dto.request.RegisterRequest;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.dto.response.UserDetailResponse;
import com.home_care_services.phooja.dto.response.UserDetailsREsponse;
import com.home_care_services.phooja.enumerated.Role;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    UserDetailsREsponse getAllUser();
    
    RegisterResponse updateUser(String id, String name, String email, Role role, String password);

    RegisterResponse deleteUser(String id);
}
