package com.home_care_services.phooja.service;

import com.home_care_services.phooja.dto.request.BookingRequest;
import com.home_care_services.phooja.dto.response.BookingResponse;
import com.home_care_services.phooja.dto.response.RegisterResponse;

public interface BookingService {

    RegisterResponse addBookings(BookingRequest request);

    BookingResponse getAllBookings();

}
