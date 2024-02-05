package com.project.examportal.helper;

public class UserFoundException extends Exception{

	
	public UserFoundException() {
		super("User with this username is already in DB !! Try with another username");
	}
	public UserFoundException(String msg) {
		super(msg);
	}
}
