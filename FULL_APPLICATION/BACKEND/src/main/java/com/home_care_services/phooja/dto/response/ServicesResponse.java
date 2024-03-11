package com.home_care_services.phooja.dto.response;

import java.util.List;

import com.home_care_services.phooja.model.Services;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServicesResponse {

    List<Services> services;

}
