 package com.edubridge.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.event.model.Products;
import com.edubridge.event.repo.productRepository;

@Service
public class productService {

	@Autowired
	private productRepository repo;
	
	public Products saveProduct(Products p) {
		return repo.save(p);
	}
	
	public List<Products> getProducts(){
		return repo.findAll();
	}

	
	public void updateProduct(Products p) {
		repo.save(p);
	}
	
	public void deleteProduct(Integer id) {
		repo.deleteById(id);
	}
}
