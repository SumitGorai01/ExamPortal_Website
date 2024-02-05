package com.project.examportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.examportal.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	public User findByUsername(String username);

}
