import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponPackageHomeComponent } from './components/coupon-package-home/coupon-package-home.component';
import { CouponPackageItemComponent } from './components/coupon-package-item/coupon-package-item.component';
import { CouponPackageAddComponent } from './components/coupon-package-add/coupon-package-add.component';
import { CouponPackageEditComponent } from './components/coupon-package-edit/coupon-package-edit.component';
import { CouponPackageSearchComponent } from './components/coupon-package-search/coupon-package-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CouponPackageService } from './services/coupon-package.service';

@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CouponPackageHomeComponent, 
    CouponPackageItemComponent, 
    CouponPackageAddComponent, 
    CouponPackageEditComponent, 
    CouponPackageSearchComponent, 
  ],
  providers: [
    CouponPackageService
  ],
  entryComponents: [
    CouponPackageAddComponent,
    CouponPackageEditComponent
  ]
})
export class CouponPackageModule { }
