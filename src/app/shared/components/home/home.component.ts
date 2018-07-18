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
  pageIndex: number = 1;
  router: Router;
  productPage: string = '/home/product-home';
  orderPage: string = '/home/order-home';
  accountPage: string = '/home/account-home';

  constructor(private accountService: AccountService, private _router: Router) { 
    this.router = _router;
  }

  ngOnInit() {
    var link: string = this.router.url;
    if (link == this.productPage) {
      this.pageIndex = 1;
    } else if (link == this.orderPage) {
      this.pageIndex = 3;
    } else if (link == this.accountPage) {
      this.pageIndex = 4;
    } else {
      this.pageIndex = 2;
    }
  }

  clickPage(pageIndex) {
    this.pageIndex = pageIndex;
  }

  logOut() {
    this.accountService.logout();
  }
}
