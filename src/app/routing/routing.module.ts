import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../shared/components/home/home.component";
import { LoginComponent } from "../shared/components/login/login.component";
import { AccountHomeComponent } from "../account/components/account-home/account-home.component";
import { ProductHomeComponent } from "../product/components/product-home/product-home.component";
import { CouponPackageHomeComponent } from '../coupon-package/components/coupon-package-home/coupon-package-home.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [ 
  { path: '', redirectTo: '/home/product-home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], data: { expectedRole: 'user' } },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], data: {expectedRole: 'admin'},
    children: [
      { path: 'product-home', component: ProductHomeComponent }, 
      { path: 'account-home', component: AccountHomeComponent },
      { path: 'coupon-package-home', component: CouponPackageHomeComponent }
    ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
