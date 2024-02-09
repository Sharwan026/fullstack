package com.ecom.sharwan.service.impl;


import java.util.List;
import java.util.stream.Collectors;


import org.springframework.stereotype.Service;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.UserResponse;
import com.ecom.sharwan.model.User;
import com.ecom.sharwan.repository.UserRepository;
import com.ecom.sharwan.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users=userRepository.findAll();
        List<UserResponse> userResponses=users.stream().map(user->UserResponse.builder()
                 .id(user.getId())
                 .name(user.getName())
                 .email(user.getEmail())
                 .role(user.getRole())
                 .address(user.getAddress())
                 .build())
                 .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
                      .message("User data fetched successfuly")
                      .data(userResponses)
                      .build();


        
    }

}