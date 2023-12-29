 package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Products;
import com.edubridge.app1.service.productService;

//@CrossOrigin(origins = "http://localhost:4200/")
//@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class productController {

	@Autowired
	private productService service;
	
	@PostMapping("/product")
	public ResponseEntity<?> save(@RequestBody Products p) {
		Products se = service.saveProduct(p);
		return new ResponseEntity<>(se, HttpStatus.CREATED);
	}
	
	@GetMapping("/product")
	public ResponseEntity<?> getAllProducts(){
		List<Products> el = service.getProducts();
		return new ResponseEntity<>(el, HttpStatus.OK);
	}

	
	@PutMapping("/product")
	public ResponseEntity<?> update(@RequestBody Products p) {
		 service.updateProduct(p);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteProduct(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
