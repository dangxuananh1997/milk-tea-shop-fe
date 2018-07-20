import { Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

import { Account } from '../../models/account'
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
          ]))
        ]), { optional: true }),


      ])
    ])
  ]
})
export class AccountHomeComponent implements OnInit {
  accounts: Account[] = [];
  pageIndex: number = 1;
  textSearch: string = '';
  total: number = 0;
  
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if ((event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) 
      && (this.accounts.length < this.total)) {
      this.pageIndex++;
      this.getData();
    }
  }

  resetData() {
    this.pageIndex = 1;
    this.accounts = [];
    this.getData();
    this.total = 0;
  }

  getData() {
    this.accountService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.accounts = this.accounts.concat(response.Data);
          this.total = response.Total;
        },
        (error) => { console.error(error); }
      )
  }

  searchData(searchValue: string) {
    this.textSearch = searchValue;
    this.resetData();
  }

}
