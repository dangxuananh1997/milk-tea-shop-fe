import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    OrderHomeComponent, 
    OrderItemComponent, 
    OrderSearchComponent, 
    OrderDetailComponent
  ],
  providers: [
    OrderService
  ],
  entryComponents: [
    OrderDetailComponent
  ]
})
export class OrderModule { }
