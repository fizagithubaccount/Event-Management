 package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Employee;
import com.edubridge.app1.service.EmployeeService;

//@CrossOrigin(origins = "http://localhost:4200/")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	private EmployeeService service;
	
	@PostMapping("/employee")
	public ResponseEntity<?> save(@RequestBody Employee e) {
		Employee se = service.saveEmpployee(e);
		return new ResponseEntity<>(se, HttpStatus.CREATED);
	}
	
	@GetMapping("/employee")
	public ResponseEntity<?> getAllEmployees(){
		List<Employee> el = service.getEmployees();
		return new ResponseEntity<>(el, HttpStatus.OK);
	}
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getSingleEmployee(@PathVariable Integer id){
		Employee emp = service.getEmployee(id);
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}
	
	@PutMapping("/employee")
	public ResponseEntity<?> update(@RequestBody Employee e) {
		 service.updateEmployee(e);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteEMployee(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
