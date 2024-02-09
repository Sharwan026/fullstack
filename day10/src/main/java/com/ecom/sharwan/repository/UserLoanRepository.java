package com.ecom.sharwan.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.sharwan.model.UserLoan;


public interface UserLoanRepository extends JpaRepository<UserLoan, String>{
    Optional<UserLoan> findByUserLoanId(String userLoanId);
}