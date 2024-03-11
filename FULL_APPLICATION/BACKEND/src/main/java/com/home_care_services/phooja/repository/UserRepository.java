package com.home_care_services.phooja.repository;

// import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

// import com.home_care_services.phooja.dto.request.UserDetailsDTO;
import com.home_care_services.phooja.model.User;

public interface UserRepository extends JpaRepository<User , String> {

    Optional<User> findByEmail(String email);

    // @Query("SELECT new com.home_care_services.phooja.dto.response.UserDetailsDTO(u.id, u.name, u.email, u.number) FROM User u")
    // List<UserDetailsDTO> getAllUsersDetails();

}
