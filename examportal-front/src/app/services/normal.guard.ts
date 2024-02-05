import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

// export const normalGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})
export class NormalGuard implements CanActivate{

  constructor(private login :LoginService, private router:Router ){}


  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      if(this.login.isLoginIn() && this.login.getUserRole()=='NORMAL'){
        return true;
      }
      this.router.navigate(['login']);
      return false;

      // throw new Error('Method not implemented.');
  }

}