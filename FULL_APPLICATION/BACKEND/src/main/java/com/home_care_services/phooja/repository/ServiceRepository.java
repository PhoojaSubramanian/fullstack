package com.home_care_services.phooja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home_care_services.phooja.model.Services;

public interface ServiceRepository extends JpaRepository<Services, String> {

}
