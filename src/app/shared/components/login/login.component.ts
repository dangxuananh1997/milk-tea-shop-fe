import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  loginAdmin(): void {
    this.accountService.loginAdmin();
    this.router.navigate(['/home']);
  }
  
  setUsername(username: string): void {
    console.log(username);
    this.username = username;
  }

  setPassword(password: string): void {
    console.log(password);
    this.password = password;
  }

  submitted = false;
  
  onSubmitted() {
    this.submitted = true;
  }

  // get diagnostic() {
  //   return JSON.stringify(this.user);
  // }

  // loginUser(): void {
  //   this.accountService.loginUser();
  //   this.router.navigate(['/home']);
  // }

}
