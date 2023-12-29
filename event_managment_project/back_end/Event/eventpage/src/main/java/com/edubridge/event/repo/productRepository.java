package com.edubridge.event.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.event.model.Products;

@Repository
public interface productRepository extends JpaRepository<Products, Integer> {

}
