package com.home_care_services.phooja.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.home_care_services.phooja.dto.request.ServicesRequest;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.dto.response.ServicesResponse;
import com.home_care_services.phooja.service.ServicesService;
import com.home_care_services.phooja.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.SERVICES)
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class ServicesController {

    private final ServicesService servicesService;


     @PostMapping(MyConstant.SERVICES_ADD)
    public ResponseEntity<?> addService(@RequestBody ServicesRequest request) {
        RegisterResponse response = new RegisterResponse();

        try {
            response = servicesService.addService(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.SERVICES_ALL_GET)
    public ResponseEntity<?> getAllServices()
    {
        ServicesResponse servicesResponse = new ServicesResponse();
        try{
                servicesResponse =  servicesService.getAllServices();
                return new ResponseEntity<>(servicesResponse,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(servicesResponse,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping(MyConstant.SERVICES_UPDATE)
    public ResponseEntity<?> updateService(@RequestParam String id , @RequestBody ServicesRequest request)
    {
        RegisterResponse response = new RegisterResponse();
        try{
            response = servicesService.updateService(id,request.getService_name(),request.getDescription(),request.getDuration(),request.getAmount(),request.isAvailability());
            return new ResponseEntity<>(response,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.SERVICES_DELETE)
    public ResponseEntity<?> deleteService(@RequestParam String id)
    {
        RegisterResponse response = new RegisterResponse();

        try
        {
            response = servicesService.deleteService(id);
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }

    }
}
