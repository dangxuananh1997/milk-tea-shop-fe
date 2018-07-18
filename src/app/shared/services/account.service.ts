import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  loginAdmin(username: string, password: string): Promise<Token> {
    console.log(username, password);
    return new Promise<Token>((resolve, reject) => {
      this.httpClient.post(`${environment.tokenLink}token`, 
        `grant_type=password&username=${username}&password=${password}`)
        .subscribe(
          (response: Token) => {
            this.saveToken(response);
            this.setExpiredTime(response);
            this.router.navigate(['/home']);
            resolve(response);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
      });
    }
    
  saveToken(token: Token) {
    localStorage.setItem('MILK_TEA_SHOP_ACCESS_TOKEN', JSON.stringify(token));
  }

  setExpiredTime(token: Token) {
    var time = new Date().getHours();
    token.expires_in += time;
    localStorage.setItem('MILK_TEA_SHOP', JSON.stringify(token));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
