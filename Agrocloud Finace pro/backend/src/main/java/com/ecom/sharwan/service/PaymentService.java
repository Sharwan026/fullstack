package com.ecom.sharwan.service;

import com.ecom.sharwan.dto.request.PaymentRequest;
import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllUser();

    PaymentResponse register(PaymentRequest request);

    BasicResponse<PaymentResponse> deletebooking(String paymentId);
}