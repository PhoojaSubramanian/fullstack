package com.home_care_services.phooja.service.imp;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.home_care_services.phooja.dto.request.RegisterRequest;
import com.home_care_services.phooja.dto.response.RegisterResponse;
import com.home_care_services.phooja.dto.response.UserDetailResponse;
import com.home_care_services.phooja.dto.response.UserDetailsREsponse;
import com.home_care_services.phooja.enumerated.Role;
import com.home_care_services.phooja.model.User;
import com.home_care_services.phooja.repository.UserRepository;
import com.home_care_services.phooja.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        

        if (isUser.isPresent()) {
            return RegisterResponse.builder()
                                    .message("User already exists with email " + request.getEmail())
                                    .build();
        }

        var user = User.builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(request.getPassword())
                        .build();

        userRepository.save(user);

        return RegisterResponse.builder().message("User registered successfully").build();
    }

    @Override
    public UserDetailResponse getUser(String email) {
        Optional<User> isUser = userRepository.findByEmail(email);
        if (!isUser.isPresent()) {
            return UserDetailResponse.builder()
                        .message("User with email does not exist")
                        .build();
        }
        User user = isUser.get();
        return UserDetailResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
                .build();
    }

    @Override
    public UserDetailsREsponse getAllUser() {
        List<User> user = userRepository.findAll();
        return UserDetailsREsponse.builder()
            .users(user)
            .build();
    }

    @Override
    public RegisterResponse updateUser(String id , String name , String email , Role role , String password) {

        
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            System.out.println("asdf");
            User user = userOptional.get();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);
            user.setRole(role);
            
            userRepository.save(user);

            return RegisterResponse.builder().message("User updated successfully").build();
        } 
        else {
            return RegisterResponse.builder().message("User not found").build();
        }
    }

    @Override
    public RegisterResponse deleteUser(String id) {

        Optional<User> userOptional = userRepository.findById(id);

        if(!userOptional.isPresent())
        {
            return RegisterResponse.builder().message("User not found").build();
        }
        userRepository.deleteById(id);
        return RegisterResponse.builder().message("User deleted").build();
    }

}
