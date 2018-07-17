import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './services/order.service';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module,
    HttpClientModule,
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
