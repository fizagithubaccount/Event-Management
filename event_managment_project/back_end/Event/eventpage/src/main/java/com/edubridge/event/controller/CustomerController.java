package com.edubridge.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.event.model.Customer;
import com.edubridge.event.service.CustomerService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CustomerController {
	
	
	@Autowired
	private CustomerService service;
	
	@PostMapping("/customer")
	public ResponseEntity<?> save(@RequestBody Customer customer){
		Customer c = service.saveCustomer(customer);
		return new ResponseEntity<>(c,HttpStatus.CREATED);
	}
	@GetMapping("/customer")
	public ResponseEntity<?> getAllCustomer(){
		List<Customer> c = service.getCustomer();
		return new ResponseEntity<> (c,HttpStatus.OK);
	}
	
	@PostMapping("/auth")
	public ResponseEntity<?> getCustomer(@RequestBody Customer customer) {
	    Boolean found = service.existsByCustomerEmail(customer.getCustomerEmail());
	    
	    if (found) { 
	        return new ResponseEntity<>("Customer found", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
	    }
	}


}
