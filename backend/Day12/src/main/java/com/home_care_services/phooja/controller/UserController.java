package com.home_care_services.phooja.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.home_care_services.phooja.dto.request.RegisterRequest;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.dto.response.UserDetailResponse;
import com.home_care_services.phooja.dto.response.UserDetailsREsponse;
import com.home_care_services.phooja.service.UserService;
import com.home_care_services.phooja.utils.MyConstant;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(MyConstant.USER)
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping(MyConstant.USER_GET)
    public ResponseEntity<?> getUser(@RequestParam String email)
    {
        System.out.println("userrrrrrrrrr");
        UserDetailResponse response = new UserDetailResponse();
        try
        {
            response = userService.getUser(email);
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }   
    
    @GetMapping(MyConstant.USER_ALL_GET)
    public ResponseEntity<?> getAllUser()
    {
        UserDetailsREsponse userDetailsREsponse = new UserDetailsREsponse();
        try{
                userDetailsREsponse =  userService.getAllUser();
                return new ResponseEntity<>(userDetailsREsponse,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(userDetailsREsponse,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping(MyConstant.USER_UPDATE)
    public ResponseEntity<?> updateUser(@RequestParam String id , @RequestBody RegisterRequest request)
    {
        RegisterResponse response = new RegisterResponse();
        try{
            response = userService.updateUser(id,request.getName(),request.getEmail(),request.getRole(),request.getPassword());
            return new ResponseEntity<>(response,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.USER_DELETE)
    public ResponseEntity<?> deleteUser(@RequestParam String id)
    {
        RegisterResponse response = new RegisterResponse();

        try
        {
            response = userService.deleteUser(id);
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }

    }
}
