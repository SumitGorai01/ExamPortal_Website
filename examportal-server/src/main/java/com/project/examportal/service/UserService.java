package com.project.examportal.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.project.examportal.entity.User;
import com.project.examportal.entity.UserRole;


public interface UserService {

	// for creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	//get user by username
	public User getUser(String username);
	
	//to delete user by id
	public void deleteUser(Long userId);

	
}
