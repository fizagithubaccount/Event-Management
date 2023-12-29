 package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.model.Employee;
import com.edubridge.app1.repo.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repo;
	
	public Employee saveEmpployee(Employee e) {
		return repo.save(e);
	}
	
	public List<Employee> getEmployees(){
		return repo.findAll();
	}
	
	public Employee getEmployee(Integer id) {
		return repo.findById(id).get();
	}
	
	public void updateEmployee(Employee e) {
		repo.save(e);
	}
	
	public void deleteEMployee(Integer id) {
		repo.deleteById(id);
	}
}
