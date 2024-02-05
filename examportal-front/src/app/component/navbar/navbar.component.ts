import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn = false;
  user=null;

  constructor(public login : LoginService){}
  
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoginIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>
    {
      this.isLoggedIn=this.login.isLoginIn();
      this.user=this.login.getUser();
    });
    // throw new Error('Method not implemented.');
  }

  public logout(){
    this.login.logout();
    // this.isLoggedIn=false;
    // this.user=null;
    window.location.reload();
  }
}
