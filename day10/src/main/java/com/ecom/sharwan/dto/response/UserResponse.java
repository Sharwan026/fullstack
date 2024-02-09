package com.ecom.sharwan.dto.response;

import com.ecom.sharwan.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserResponse {
    private String id;
    private String name;
    private String email;
    // private enum role;/
    private Role role;
    private long phoneNumber;
    private String image;
    private String address;
}
