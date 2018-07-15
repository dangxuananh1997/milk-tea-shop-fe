import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeSearchValue() {
    let tempSearch: string = this.searchValue;
    setTimeout(() => {
      if (tempSearch == this.searchValue) {
        this.search.emit(this.searchValue);
      }
    }, 400);
  }

}
