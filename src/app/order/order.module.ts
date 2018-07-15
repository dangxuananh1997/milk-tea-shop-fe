import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderHomeComponent, OrderItemComponent, OrderSearchComponent]
})
export class OrderModule { }
