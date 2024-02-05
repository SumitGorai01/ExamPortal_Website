package com.project.examportal;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.beans.factory.annotation.Autowired;
//import com.project.examportal.entity.User;
//import java.util.HashSet;
//import java.util.Set;
//import com.project.examportal.entity.Role;
//import com.project.examportal.entity.UserRole;
//import com.project.examportal.service.UserService;

@SpringBootApplication
public class ExamportalServerApplication implements CommandLineRunner {

//	@Autowired
//	private UserService userService;
//	
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ExamportalServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("Exam Portal Start....");
		
//		User user =new User();
//		
//		user.setFirstName("Sumit");
//		user.setLastName("Gorai");
//		user.setUsername("sumit01");
//		user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
//		user.setPhone("9876543210");
//		user.setEmail("sumit@gmail.com");
//		user.setProfile("default.png");
//		
//		Role role1=new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet = new HashSet<UserRole>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
	}

}