package com.ecom.sharwan.config;

import static com.ecom.sharwan.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.ecom.sharwan.model.User;
import com.ecom.sharwan.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count() > 0) 
        return;
    var user= User.builder() 
            .name("Admin")
            .email("admin@123")
            .password(passwordEncoder.encode("Admin@123"))
            .role(ADMIN)
            .build();
            userRepository.save(user);
    }

}
