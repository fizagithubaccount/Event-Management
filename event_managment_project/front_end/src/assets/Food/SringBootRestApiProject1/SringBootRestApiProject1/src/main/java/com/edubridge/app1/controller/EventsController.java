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

import com.edubridge.app1.model.Events;
import com.edubridge.app1.service.EventsService;

//@CrossOrigin(origins = "http://localhost:4200/")
//@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class EventsController {

	@Autowired
	private EventsService service;
	
	@PostMapping("/event")
	public ResponseEntity<?> save(@RequestBody Events e) {
		Events se = service.saveEvent(e);
		return new ResponseEntity<>(se, HttpStatus.CREATED);
	}
	
	@GetMapping("/event")
	public ResponseEntity<?> getAllEvents(){
		List<Events> el = service.getEvents();
		return new ResponseEntity<>(el, HttpStatus.OK);
	}

	
	@PutMapping("/event")
	public ResponseEntity<?> update(@RequestBody Events e) {
		 service.updateEvent(e);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/event/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteEvent(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
