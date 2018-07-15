import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from '../../models/account'
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
  accounts: Account[] = [];
  pageIndex: number = 1;
  textSearch: string = '';
  
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) {
      this.pageIndex++;
      this.getData();
    }
  }

  resetData() {
    this.pageIndex = 1;
    this.accounts = [];
    this.getData();
  }

  getData() {
    this.accountService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.accounts = this.accounts.concat(response);
        },
        (error) => { console.error(error); }
      )
  }

  searchData(searchValue: string) {
    this.textSearch = searchValue;
    this.resetData();
  }

}
