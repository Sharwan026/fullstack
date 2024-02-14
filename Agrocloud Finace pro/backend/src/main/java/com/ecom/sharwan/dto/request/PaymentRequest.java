package com.ecom.sharwan.dto.request;



import java.util.Date;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {
    private String status;
    private double amountPaid;
    private Date paymentDate;
    private String modeOfPayment;
}