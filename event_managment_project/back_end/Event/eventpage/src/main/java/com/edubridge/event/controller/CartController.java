 package com.edubridge.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.event.model.Cart;
import com.edubridge.event.model.Services;
import com.edubridge.event.service.cartService;
import com.edubridge.event.service.serviceService;

//@CrossOrigin(origins = "http://localhost:4200/")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class CartController {

	@Autowired
	private cartService service;
	
	@PostMapping("/cart")
	public ResponseEntity<?> save(@RequestBody Cart c) {
		Cart se = service.saveCart(c);
		return new ResponseEntity<>(se, HttpStatus.CREATED);
	}
	
	@GetMapping("/cart")
	public ResponseEntity<?> getAllService(){
		List<Cart> el = service.getCart();
		return new ResponseEntity<>(el, HttpStatus.OK);
	}

	
	@PutMapping("/cart")
	public ResponseEntity<?> update(@RequestBody Cart c) {
		 service.updateCart(c);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/cart/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteCart(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
