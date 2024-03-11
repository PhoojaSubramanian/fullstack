package com.home_care_services.phooja.service;

import com.home_care_services.phooja.dto.request.ServicesRequest;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.dto.response.ServicesResponse;

public interface ServicesService {

    RegisterResponse addService(ServicesRequest request);

    ServicesResponse getAllServices();

    RegisterResponse updateService(String id, String service_name, String description, String duration, Float amount,
            boolean availability);

    RegisterResponse deleteService(String id);

}
