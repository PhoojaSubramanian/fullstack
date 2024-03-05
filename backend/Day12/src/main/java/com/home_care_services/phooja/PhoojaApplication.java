package com.home_care_services.phooja;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.home_care_services.phooja.dto.request.RegisterRequest;
import com.home_care_services.phooja.enumerated.Role;
import com.home_care_services.phooja.service.UserService;

@SpringBootApplication
public class PhoojaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhoojaApplication.class, args);
	}


	// @Bean
	// public CommandLineRunner commandLineRunner(UserService userService)
	// {
	// 	return args->{
	// 		var user=RegisterRequest.builder()
	// 		.name("Admin")
	// 		.email("admin@gmail.com")
	// 		.role(Role.USER)
	// 		.password("Admin@123")
	// 		.build();
	// 		userService.register(user);
	// 	};
	// }

}
