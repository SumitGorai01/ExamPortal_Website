import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(public login :LoginService){}

  isLoggedIn = false;
  user=null;
  
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
