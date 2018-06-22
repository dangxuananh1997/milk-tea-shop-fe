import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  loginAdmin() {
    //api call return token
    let token: Token = new Token();
    token.access_token = 'abc';
    token.role = 'admin';
    localStorage.setItem('MILK_TEA_SHOP_ACCESS_TOKEN', JSON.stringify(token));
  }

  loginUser() {
    let token: Token = new Token();
    token.access_token = '123';
    token.role = 'user';
    localStorage.setItem('MILK_TEA_SHOP_ACCESS_TOKEN', JSON.stringify(token));
  }

  logout() {
    localStorage.clear();
  }
}
