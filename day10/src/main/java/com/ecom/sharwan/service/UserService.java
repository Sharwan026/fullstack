package com.ecom.sharwan.service;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.UserResponse;

public interface UserService {

   BasicResponse<UserResponse> getAllUser();
}
