import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    user = null;
  constructor(public login: LoginService,private snack:MatSnackBar) {}
  
  ngOnInit(): void {
    //this data is comming from localStorage not from server
    this.user=this.login.getUser();

    //to get profile data from server
    // this.login.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user=user;
    //   },
    //   (error)=>{
    //     // alert('Fill the details First!!');
    //   this.snack.open("SomeThing Went Wrong!!","ok",{
    //     duration:3000,
    //   });
    //   }
    // )

    // throw new Error('Method not implemented.');
  }

}
