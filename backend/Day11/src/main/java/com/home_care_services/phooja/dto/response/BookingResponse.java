package com.home_care_services.phooja.dto.response;

import java.util.List;

import com.home_care_services.phooja.model.Bookings;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    List<Bookings> bookings;

}
