package com.ecom.sharwan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.sharwan.model.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String username);
}
