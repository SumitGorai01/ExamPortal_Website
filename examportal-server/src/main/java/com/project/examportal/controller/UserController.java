package com.project.examportal.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.examportal.entity.Role;
import com.project.examportal.entity.User;
import com.project.examportal.entity.UserRole;
import com.project.examportal.helper.UserFoundException;
import com.project.examportal.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	//creating user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		user.setProfile("default.png");
		
		//encoding password with BCryptPassowrd
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		
		Set<UserRole> roles=new HashSet<UserRole>();
		
		Role role =new Role();
		role.setRoleId(45L);
		role.setRoleName("NORMAL");
		
		UserRole userRole=new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);		
		
	}
	
	//get user by username
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
				
		return this.userService.getUser(username);
		
	}
	
	//delete user by username
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}
 
	//update user 
//	
//	@PreAuthorize("hasRole('NORMAL')")
//	@GetMapping("/normal")
//	public ResponseEntity<String> normalUser(){
//		return ResponseEntity.ok("Yes, Ia am normal user");
//	}
//
//	@PreAuthorize("hasRole('ADMIN')")
//	@GetMapping("/admin")
//	public ResponseEntity<String> adminUser(){
//		return ResponseEntity.ok("Yes, Ia am admin user");
//	}
//	@GetMapping("/public")
//	public ResponseEntity<String> publicUser(){
//		return ResponseEntity.ok("Yes, I am public user");
//	}
	
//	Exception handler
	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionhandler(UserFoundException ex){
		String errorMessage = "User Found Exception: " + ex.getMessage();
	    return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
		
	}
	
}
