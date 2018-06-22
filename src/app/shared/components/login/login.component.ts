import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  loginAdmin(): void {
    this.accountService.loginAdmin();
    this.router.navigate(['/admin-home']);
  }

  // loginUser(): void {
  //   this.accountService.loginUser();
  //   this.router.navigate(['/home']);
  // }

}
