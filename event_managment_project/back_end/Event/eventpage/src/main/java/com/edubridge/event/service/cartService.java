 package com.edubridge.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.event.model.Cart;
import com.edubridge.event.model.Services;
import com.edubridge.event.repo.CartRepository;
import com.edubridge.event.repo.serviceRepository;

@Service
public class cartService {

	@Autowired
	private CartRepository repo;
	
	public Cart saveCart(Cart c ) {
		return repo.save(c);
	}
	
	public List<Cart> getCart(){
		return repo.findAll();
	}

	
	public void updateCart(Cart c ) {
		repo.save(c);
	}
	
	public void deleteCart(Integer id) {
		repo.deleteById(id);
	}
}
