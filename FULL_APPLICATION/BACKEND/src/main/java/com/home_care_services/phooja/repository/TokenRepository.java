package com.home_care_services.phooja.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home_care_services.phooja.model.Token;


public interface TokenRepository extends JpaRepository<Token,String> {

    List<Token> findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(String id);

    Optional<Token> findByToken(String token);

}
