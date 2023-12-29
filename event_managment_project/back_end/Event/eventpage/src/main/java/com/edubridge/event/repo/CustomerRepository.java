package com.edubridge.event.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.event.model.Customer;

@Repository
public interface CustomerRepository  extends JpaRepository<Customer, Integer>{
	
	 Boolean existsByCustomerEmail(String customerEmail);
	 
}
