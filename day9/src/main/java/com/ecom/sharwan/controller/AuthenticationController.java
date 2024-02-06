package com.ecom.sharwan.controller;

import static com.ecom.sharwan.utils.MyConstant.AUTH;
import static com.ecom.sharwan.utils.MyConstant.LOGIN;
import static com.ecom.sharwan.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.sharwan.dto.request.LoginRequest;
import com.ecom.sharwan.dto.request.RegisterRequest;
import com.ecom.sharwan.dto.response.LoginResponse;
import com.ecom.sharwan.dto.response.RegisterResponse;
import com.ecom.sharwan.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try {
            response=authenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try {
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        } catch (Exception e) {
            LoginResponse.builder()
            .message("Something went wrong!").token("").build();
            // System.out.println(e);
            // response.setMessage("Something went wrong!");
            // response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}