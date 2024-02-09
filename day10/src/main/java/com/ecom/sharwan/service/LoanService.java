package com.ecom.sharwan.service;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.LoanResponse;

public interface LoanService {
    
    BasicResponse<LoanResponse> getAllLoan();
}