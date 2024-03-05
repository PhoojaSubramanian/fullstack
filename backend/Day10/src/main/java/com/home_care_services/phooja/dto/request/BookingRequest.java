package com.home_care_services.phooja.dto.request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String service_id;
    private String address;
    private String booking_date;
    private String booking_status;
    private String payment_id;

}
