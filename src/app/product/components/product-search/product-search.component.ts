import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
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
    }, 2000);
  }

}
