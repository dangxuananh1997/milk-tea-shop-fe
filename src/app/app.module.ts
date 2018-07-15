import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CouponPackageModule } from './coupon-package/coupon-package.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    SharedModule,
    AccountModule,
    OrderModule,
    ProductModule,
    RoutingModule,
    CouponPackageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
