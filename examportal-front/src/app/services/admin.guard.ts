import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

// export const adminGuard: 
// CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})
export class AdminGuard implements CanActivate{

  constructor(private login :LoginService, private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    
      if(this.login.isLoginIn() && this.login.getUserRole()=='ADMIN'){
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}