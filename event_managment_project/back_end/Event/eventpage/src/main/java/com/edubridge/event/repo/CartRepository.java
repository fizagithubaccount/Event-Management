package com.edubridge.event.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.event.model.Cart;
import com.edubridge.event.model.Services;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

}
