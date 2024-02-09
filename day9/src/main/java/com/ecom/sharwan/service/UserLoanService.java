package com.ecom.sharwan.service;

import com.ecom.sharwan.dto.request.UserLoanRequest;
import com.ecom.sharwan.dto.response.UserLoanResponse;

public interface UserLoanService {
      UserLoanResponse getUserLoanById(String userLoanId);
      UserLoanResponse deleteUserLoanById(String userLoanId);
      UserLoanResponse createUserLoanById(UserLoanRequest bookingRequest);

}