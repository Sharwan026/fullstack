package com.ecom.sharwan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.sharwan.model.User;


public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String username);
}
