package com.edubridge.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.event.model.Customer;
import com.edubridge.event.repo.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repo;

	public Customer saveCustomer(Customer customer) {
		return repo.save(customer);

	}

	public List<Customer> getCustomer() {
		return repo.findAll();
	}

	

	public Boolean existsByCustomerEmail(String customerEmail) {
		
		return repo.existsByCustomerEmail(customerEmail);
	}
}
