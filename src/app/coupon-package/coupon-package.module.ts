import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponPackageHomeComponent } from './components/coupon-package-home/coupon-package-home.component';
import { CouponPackageItemComponent } from './components/coupon-package-item/coupon-package-item.component';
import { CouponPackageAddComponent } from './components/coupon-package-add/coupon-package-add.component';
import { CouponPackageEditComponent } from './components/coupon-package-edit/coupon-package-edit.component';
import { CouponPackageSearchComponent } from './components/coupon-package-search/coupon-package-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CouponPackageHomeComponent, CouponPackageItemComponent, CouponPackageAddComponent, CouponPackageEditComponent, CouponPackageSearchComponent]
})
export class CouponPackageModule { }
