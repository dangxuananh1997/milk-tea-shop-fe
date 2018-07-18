import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLogin: boolean = false;
  
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  loginAdmin(): void {
    this.accountService.loginAdmin(this.username, this.password)
      .then(
        () => { 
          
        },
        () => {
          this.invalidLogin = true;
        }
      );
  }
  
  setUsername(username: string): void {
    this.username = username;
  }

  setPassword(password: string): void {
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
