package com.project.examportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.examportal.entity.exam.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
