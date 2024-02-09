package com.ecom.sharwan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.sharwan.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String>{
        Optional<Loan> findByLoanId(String loanId);
}