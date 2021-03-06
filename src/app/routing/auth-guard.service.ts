import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AccountService } from '../shared/services/account.service';
import { Token } from '../shared/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const tokenJson = localStorage.getItem('MILK_TEA_SHOP_ACCESS_TOKEN');
    let token: Token = JSON.parse(tokenJson);
    const tokenTime = localStorage.getItem('MILK_TEA_SHOP');
    let tokenExpired: Token = JSON.parse(tokenTime);
    var currentHour = new Date().getHours();
    
    if (token === undefined || token === null || token.role != expectedRole || 
      (tokenExpired.expires_in) < currentHour) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
}
