import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coupon-package-search',
  templateUrl: './coupon-package-search.component.html',
  styleUrls: ['./coupon-package-search.component.css']
})
export class CouponPackageSearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeSearchValue() {
    let tempSearch: string = this.searchValue;
    setTimeout(() => {
      if (tempSearch == this.searchValue) {
        console.log(`${tempSearch} ${this.searchValue}`);
        this.search.emit(this.searchValue);
      }
    }, 400);
  }

}
