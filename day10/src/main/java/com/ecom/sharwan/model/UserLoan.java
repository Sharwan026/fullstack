package com.ecom.sharwan.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Entity;
// import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "userLoan")
public class UserLoan {
    
    @Id
    @GeneratedValue(strategy = UUID)
    private String userLoanId;

    // @Column(nullable = false)
    private Long loanAmount;
    
    // @Column(nullable = false)
    private Integer loanTotalDuration;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "loanId", referencedColumnName = "loanId")
    private Loan loan;
}