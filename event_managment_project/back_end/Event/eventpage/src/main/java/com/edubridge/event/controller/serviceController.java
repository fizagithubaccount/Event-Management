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

import com.edubridge.event.model.Services;
import com.edubridge.event.service.serviceService;

//@CrossOrigin(origins = "http://localhost:4200/")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class serviceController {

	@Autowired
	private serviceService service;
	
	@PostMapping("/service")
	public ResponseEntity<?> save(@RequestBody Services s) {
		Services se = service.saveService(s);
		return new ResponseEntity<>(se, HttpStatus.CREATED);
	}
	
	@GetMapping("/service")
	public ResponseEntity<?> getAllService(){
		List<Services> el = service.getServices();
		return new ResponseEntity<>(el, HttpStatus.OK);
	}

	
	@PutMapping("/service")
	public ResponseEntity<?> update(@RequestBody Services s) {
		 service.updateService(s);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/service/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteService(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
