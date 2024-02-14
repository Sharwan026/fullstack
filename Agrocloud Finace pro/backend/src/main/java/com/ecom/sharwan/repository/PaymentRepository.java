package com.ecom.sharwan.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.sharwan.model.Payment;



public interface PaymentRepository extends JpaRepository<Payment, String> {

}