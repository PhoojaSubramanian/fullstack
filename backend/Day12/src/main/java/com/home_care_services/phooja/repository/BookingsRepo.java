package com.home_care_services.phooja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home_care_services.phooja.model.Bookings;

public interface BookingsRepo extends JpaRepository<Bookings,String> {

}
