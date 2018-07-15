import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CouponPackage } from '../../models/coupon-package';

@Component({
  selector: 'app-coupon-package-item',
  templateUrl: './coupon-package-item.component.html',
  styleUrls: ['./coupon-package-item.component.css']
})
export class CouponPackageItemComponent implements OnInit {
  @Input() couponPackage: CouponPackage;
  @Output() editCouponPackage = new EventEmitter<CouponPackage>();
  @Output() deleteCouponPackage = new EventEmitter<CouponPackage>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteCouponPackage.emit(this.couponPackage);
  }

  edit() {
    this.editCouponPackage.emit(this.couponPackage);
  }

}
