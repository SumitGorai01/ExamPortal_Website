import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  loginData = {
    username:'',
    password:''
  }
  

  constructor(private snack:MatSnackBar, private login:LoginService ,private router : Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  formSubmit(){
    console.log('login button clicked');
     //validation for username
     if(this.loginData.username.trim()=='' || this.loginData.username==null){
      // alert('Fill the details First!!');
      this.snack.open("Username is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    //validation for password
    if(this.loginData.password=='' || this.loginData.password==null){
      // alert('Fill the details First!!');
      this.snack.open("Password is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }

    //request to server to generate token

    this.login.generateToken(this.loginData).subscribe((data : any)=>{
      console.log('success');

      //alert on success
      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: "Login Successful !!",
      //   // showConfirmButton: false,
      //   // timer: 20000
      // });
      console.log(data);
      console.log("Inside Intercetor")


      //login....
      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe(
        (user : any)=>{
          this.login.setUser(user);
          //alert on success
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful !!",
        // showConfirmButton: false,
        // timer: 20000
      });
          console.log(user);

          //redirect ...: ADMIN : admin-dashboard
          //redirect...:NORMAL : user-dashborad
          if(this.login.getUserRole()=="ADMIN"){
            //admin dashboard
            // window.location.href='/admin'
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          }
          else if(this.login.getUserRole()=="NORMAL"){
            //normal-user dashboard
            // window.location.href='/user-dashboard'
            this.login.loginStatusSubject.next(true);
            this.router.navigate(['user-dashboard']);
          }
          else{
            this.login.logout();
          }
        }
      );

    },
    (error)=>{
      console.log('Error');
      console.log(error);
      // alert('Something went wrong!!')
      Swal.fire({
        icon: "error",
        title: "Oops...Something went wrong!!",
        text: " Invalid Credintials !!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      this.snack.open("Invalid Credintials !! Try Again !",'ok',{
        duration:3000
      })
    }
    );
  }
}
