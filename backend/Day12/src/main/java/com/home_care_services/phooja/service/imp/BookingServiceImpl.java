package com.home_care_services.phooja.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.home_care_services.phooja.dto.request.BookingRequest;
import com.home_care_services.phooja.dto.response.BookingResponse;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.model.Bookings;
import com.home_care_services.phooja.repository.BookingsRepo;
import com.home_care_services.phooja.service.BookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class BookingServiceImpl implements BookingService {

    private final BookingsRepo bookingsRepo;
    @Override
    public RegisterResponse addBookings(BookingRequest request) {
        var bookings = Bookings.builder()
                        .service_id(request.getService_id())
                        .address(request.getAddress())
                        .booking_date(request.getBooking_date())
                        .booking_status(request.getBooking_status())
                        .payment_id(request.getPayment_id())
                        .build();

        bookingsRepo.save(bookings);
                        

        return RegisterResponse.builder()
                                .message("Bookings added successfully")
                                .build();
    }

    @Override
    public BookingResponse getAllBookings() {
        
        List<Bookings> bookings = bookingsRepo.findAll();
        return BookingResponse.builder().bookings(bookings).build();
    }

}
