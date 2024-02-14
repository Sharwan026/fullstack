package com.ecom.sharwan.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ecom.sharwan.dto.request.UserLoanRequest;
import com.ecom.sharwan.dto.response.UserLoanResponse;
import com.ecom.sharwan.model.UserLoan;
import com.ecom.sharwan.repository.UserLoanRepository;
import com.ecom.sharwan.service.UserLoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserLoanServiceImpl implements UserLoanService{

    private final UserLoanRepository userLoanRepository;

    @Override
    public UserLoanResponse getUserLoanById(String userLoanId) {
        Optional<UserLoan> isUserLoanExists = userLoanRepository.findByUserLoanId(userLoanId);
        if (!isUserLoanExists.isPresent()) {
            return UserLoanResponse.builder().message("User loan id mismatch!").build();
        }
        return UserLoanResponse.builder()
            .message("User loan data fetched successfully@")
            .userLoanId(userLoanId)
            .user(isUserLoanExists.get().getUser())
            .loan(isUserLoanExists.get().getLoan())
            .build();
    }

    
    @Override
    public UserLoanResponse createUserLoanById(UserLoanRequest request) {
        Optional<UserLoan> isUserLoanExists = userLoanRepository.findByUserLoanId(request.userLoanId);
        if (!isUserLoanExists.isPresent()) {
            return UserLoanResponse.builder().message("User loan id mismatch!").build();
        }
        var book = UserLoan.builder()
        .userLoanId(request.getUserLoanId())
        // .bookingname(request.getBookingName())
        // .status(request.getStatus())
        .user(isUserLoanExists.get().getUser())
        .loan(isUserLoanExists.get().getLoan())
        .build();
        userLoanRepository.save(book);
        return UserLoanResponse.builder()
        .message("Success")
        .build();
    }
    
    @Override
    public UserLoanResponse deleteUserLoanById(String userLoanId) {
        if (userLoanRepository.existsById(userLoanId)) {
            userLoanRepository.deleteById(userLoanId);
            return UserLoanResponse.builder()
                .message("User Loan deleted successfully")
                .build();
        } else {
            return UserLoanResponse.builder()
            .message("User Loan not found with ID: " + userLoanId)
            .build();
        }
    }
}