import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { throwError } from 'rxjs';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor(private userService: UserService,private snack:MatSnackBar){}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  ngOnInit():void{}

  formSubmit(){
    console.log(this.user);
    
    //validation for username
    if(this.user.username=='' || this.user.username==null){
      // alert('Fill the details First!!');
      this.snack.open("Username is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    //validation for password
    if(this.user.password=='' || this.user.password==null){
      // alert('Fill the details First!!');
      this.snack.open("Password is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    //validation for firstName
    if(this.user.firstName=='' || this.user.firstName==null){
      // alert('Fill the details First!!');
      this.snack.open("FirstName is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    //validation for lastName
    if(this.user.lastName=='' || this.user.lastName==null){
      // alert('Fill the details First!!');
      this.snack.open("LastName is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }    
    //validation for email
    if(this.user.email=='' || this.user.email==null){
      // alert('Fill the details First!!');
      this.snack.open("Email is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    //validation for phone
    if(this.user.phone=='' || this.user.phone==null){
      // alert('Fill the details First!!');
      this.snack.open("Phone Number is required!!","ok",{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    


     //addUser : userservice
  this.userService.addUser(this.user).subscribe(
    (data : any)=>{
      //success
      console.log(data);
      // alert('Success');
      Swal.fire('Registration Successful !!','Yor User ID : '+data.userId,'success')
    },
    (error)=>{
      //error
      console.log(error);
      // alert('Something went wrong!!')
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      this.snack.open('something went wrong !!','ok',
      {
        duration:3000,

      })

    }
  );
  }

//this.user
 
}
