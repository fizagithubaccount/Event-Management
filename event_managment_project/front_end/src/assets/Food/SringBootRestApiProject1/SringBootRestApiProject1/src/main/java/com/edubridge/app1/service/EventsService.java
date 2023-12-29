 package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.model.Events;
import com.edubridge.app1.repo.eventRepository;

@Service
public class EventsService {

	@Autowired
	private eventRepository repo;
	
	public Events saveEvent(Events e) {
		return repo.save(e);
	}
	
	public List<Events> getEvents(){
		return repo.findAll();
	}

	
	public void updateEvent(Events e) {
		repo.save(e);
	}
	
	public void deleteEvent(Integer id) {
		repo.deleteById(id);
	}
}
