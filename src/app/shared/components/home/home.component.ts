import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  exports: [RouterModule]
})

export class HomeComponent implements OnInit {
  pageIndex: number = 0;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  clickPage(pageIndex) {
    this.pageIndex = pageIndex;
  }

  logOut() {
    this.accountService.logout();
  }
}
