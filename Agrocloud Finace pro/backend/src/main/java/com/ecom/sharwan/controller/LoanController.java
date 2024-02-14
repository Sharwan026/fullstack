package com.ecom.sharwan.controller;



import static com.ecom.sharwan.utils.MyConstant.LOAN;
import static com.ecom.sharwan.utils.MyConstant.LOANLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.LoanResponse;
import com.ecom.sharwan.service.LoanService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(LOAN)
@RequiredArgsConstructor
public class LoanController {
    
    private final LoanService loanService;

    @GetMapping(LOANLIST)
    public ResponseEntity<BasicResponse<LoanResponse>> create() {
        BasicResponse<LoanResponse> response = new BasicResponse<>();
        try {
            response = loanService.getAllLoan();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}