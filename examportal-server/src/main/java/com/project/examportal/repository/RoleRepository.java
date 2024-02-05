package com.project.examportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.examportal.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long>{

}
