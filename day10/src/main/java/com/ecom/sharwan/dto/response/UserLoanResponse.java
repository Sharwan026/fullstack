package com.ecom.sharwan.dto.response;


import com.ecom.sharwan.model.Loan;
import com.ecom.sharwan.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLoanResponse {
    private String message;
    private String userLoanId;
    private User user;
    private Loan loan;
}