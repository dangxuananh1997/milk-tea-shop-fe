import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {
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
