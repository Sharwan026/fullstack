package com.ecom.sharwan.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.LoanResponse;
import com.ecom.sharwan.model.Loan;
import com.ecom.sharwan.repository.LoanRepository;
import com.ecom.sharwan.service.LoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoanServiceimpl  implements LoanService{

    private final LoanRepository loanRepository;

    @Override
    public BasicResponse<LoanResponse> getAllLoan() {
        List<Loan> loans = loanRepository.findAll();
        List<LoanResponse> loanResponses= loans.stream().map(loan -> LoanResponse.builder()
        .loanId(loan.getLoanId())
        .loanName(loan.getLoanName())
        .loanType(loan.getLoanType())
        .loanScheme(loan.getLoanScheme())
        .loanDuration(loan.getLoanDuration())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<LoanResponse>builder()
        .message("User Data fetched").data(loanResponses).build();
    }

}