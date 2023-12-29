 package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.model.Services;
import com.edubridge.app1.repo.serviceRepository;

@Service
public class serviceService {

	@Autowired
	private serviceRepository repo;
	
	public Services saveService(Services s) {
		return repo.save(s);
	}
	
	public List<Services> getServices(){
		return repo.findAll();
	}

	
	public void updateService(Services s) {
		repo.save(s);
	}
	
	public void deleteService(Integer id) {
		repo.deleteById(id);
	}
}
