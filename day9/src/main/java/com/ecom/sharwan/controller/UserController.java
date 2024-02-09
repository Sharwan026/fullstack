package com.ecom.sharwan.controller;

// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.sharwan.dto.response.BasicResponse;
import com.ecom.sharwan.dto.response.UserResponse;
import com.ecom.sharwan.service.UserService;

import lombok.RequiredArgsConstructor;

import static com.ecom.sharwan.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class UserController {

    private final UserService userService;
     @GetMapping(USERLIST)
     public ResponseEntity<BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);

        }catch(Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
     }
     
}