package com.ecom.sharwan.service.impl;

import static com.ecom.sharwan.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecom.sharwan.dto.request.LoginRequest;
import com.ecom.sharwan.dto.request.RegisterRequest;
import com.ecom.sharwan.dto.response.LoginResponse;
import com.ecom.sharwan.dto.response.RegisterResponse;
import com.ecom.sharwan.model.User;
import com.ecom.sharwan.repository.UserRepository;
import com.ecom.sharwan.service.AuthenticationService;
import com.ecom.sharwan.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationServiceimpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists =userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        var user=User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
            userRepository.save(user);


            return RegisterResponse.builder()
            .message("user created successfully!")
            .build();
    }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse
        .builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }
}
