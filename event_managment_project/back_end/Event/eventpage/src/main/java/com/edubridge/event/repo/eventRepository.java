package com.edubridge.event.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.event.model.Events;

@Repository
public interface eventRepository extends JpaRepository<Events, Integer> {

}
