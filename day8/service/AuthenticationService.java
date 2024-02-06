package com.ecom.sharwan.service;

import com.ecom.sharwan.dto.request.LoginRequest;
import com.ecom.sharwan.dto.request.RegisterRequest;
import com.ecom.sharwan.dto.response.LoginResponse;
import com.ecom.sharwan.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
