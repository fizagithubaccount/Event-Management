package com.edubridge.event.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.event.model.Services;

@Repository
public interface serviceRepository extends JpaRepository<Services, Integer> {

}
