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
import com.home_care_services.phooja.dto.request.BookingRequest;
import com.home_care_services.phooja.dto.response.BookingResponse;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.service.BookingService;
import com.home_care_services.phooja.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.BOOKINGS)
@PreAuthorize("hasAnyRole('USER','ADMIN')")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

     @PostMapping(MyConstant.BOOKINGS_ADD)
    public ResponseEntity<?> addBookings(@RequestBody BookingRequest request) {
        RegisterResponse response = new RegisterResponse();
            System.out.println(request);
        try {
            response = bookingService.addBookings(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.BOOKINGS_GET_ALL)
    public ResponseEntity<?> getAllBookings()
    {
        BookingResponse bookingResponse = new BookingResponse();
        try{
                bookingResponse =  bookingService.getAllBookings();
                return new ResponseEntity<>(bookingResponse,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(bookingResponse,HttpStatus.EXPECTATION_FAILED);
        }
    }

    
    @PutMapping(MyConstant.BOOKINGS_UPDATE)
    public ResponseEntity<?> updateBookings(@RequestParam String id , @RequestBody BookingRequest request)
    {
        RegisterResponse response = new RegisterResponse();
        try{
            response = bookingService.updateBookings(id,request);
            return new ResponseEntity<>(response,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.BOOKINGS_DELETE)
    public ResponseEntity<?> deleteBookings(@RequestParam String id)
    {
        RegisterResponse response = new RegisterResponse();

        try
        {
            response = bookingService.deleteBookings(id);
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }

    }
    
}
