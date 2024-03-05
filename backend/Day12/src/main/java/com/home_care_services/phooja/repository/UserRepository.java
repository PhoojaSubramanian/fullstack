package com.home_care_services.phooja.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home_care_services.phooja.model.User;

public interface UserRepository extends JpaRepository<User , String> {

    Optional<User> findByEmail(String email);

}
