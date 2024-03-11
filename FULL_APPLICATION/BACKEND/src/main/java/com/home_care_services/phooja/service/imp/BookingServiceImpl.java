package com.home_care_services.phooja.service.imp;
import java.util.List;
import java.util.Optional;

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
                       
                        .patientname(request.getPatientname())
                        .dateofbirth(request.getDateofbirth())
                        .gender(request.getGender())
                        .address(request.getAddress())
                        .mobilenumber(request.getMobilenumber())
                        .emergencycontact(request.getEmergencycontact())
                        .medicalcondition(request.getMedicalcondition())
                        .servicename(request.getServicename())
                        .frequency(request.getFrequency())
                        .timing(request.getTiming())
                        .language(request.getLanguage())
                        .bookingstatus(request.getBookingstatus())
                        .email(request.getEmail())
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

    @Override
    public RegisterResponse updateBookings(String id, BookingRequest request) {
         Optional<Bookings> userOptional = bookingsRepo.findById(id);
        if (userOptional.isPresent()) {

            Bookings bookings = userOptional.get();
            bookings.setPatientname(request.getPatientname());
            bookings.setDateofbirth(request.getDateofbirth());
            bookings.setGender(request.getGender());
            bookings.setAddress(request.getAddress());
            bookings.setMobilenumber(request.getMobilenumber());
            bookings.setEmergencycontact(request.getMobilenumber());
            bookings.setMedicalcondition(request.getMedicalcondition());
            bookings.setServicename(request.getServicename());
            bookings.setFrequency(request.getFrequency());
            bookings.setTiming(request.getTiming());
            bookings.setLanguage(request.getLanguage());
            bookings.setBookingstatus(request.getBookingstatus());
            bookings.setEmail(request.getEmail());

            bookingsRepo.save(bookings);

            return RegisterResponse.builder().message("Bookings updated successfully").build();
        } 
        else {
            return RegisterResponse.builder().message("Booking not found").build();
        }
    }

    @Override
    public RegisterResponse deleteBookings(String id) {
        Optional<Bookings> userOptional = bookingsRepo.findById(id);

        if(!userOptional.isPresent())
        {
            return RegisterResponse.builder().message("Bookings not found").build();
        }
        bookingsRepo.deleteById(id);
        return RegisterResponse.builder().message("Bookings deleted").build();
       
    }

}