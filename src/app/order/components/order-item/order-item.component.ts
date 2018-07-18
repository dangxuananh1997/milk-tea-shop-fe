import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  // @Output() approveOrder = new EventEmitter<Order>();
  // @Output() declineOrder = new EventEmitter<Order>();
  @Output() viewOrder = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  // approve() {
  //   this.approveOrder.emit(this.order);
  // }

  // decline() {
  //   this.declineOrder.emit(this.order);
  // }

  viewDetail() {
    this.viewOrder.emit(this.order);
  }

}
