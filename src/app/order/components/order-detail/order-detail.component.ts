import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { OrderDetails } from '../../models/order-details';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @ViewChild('acceptSwal') private acceptSwal: SwalComponent;
  @ViewChild('declineSwal') private declineSwal: SwalComponent;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('cancelSwal') private cancelSwal: SwalComponent;
  @Input() order: Order;
  orderDetails: OrderDetails[] = [];
  acceptingOrder: Order;
  decliningOrder: Order;

  constructor(
    private activeModal: NgbActiveModal, 
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getData();
    
  }

  getData() {
    this.orderService.getById(this.order.Id)
      .then(
        (response: Order) => {
          this.orderDetails = response.OrderDetails;
        },
        (error) => console.log(error)
      )
  }
  
  showConfirmApproveOrder() {
    setTimeout(() => {
      this.acceptSwal.show();
    }, 300);
  }
  
  showConfirmDeclineOrder() {
    setTimeout(() => {
      this.declineSwal.show();
    }, 300);
  }
  
  acceptOrder() {
    this.order.Status = 'Approved'
    setTimeout(() => {
      this.orderService.edit(this.order)
        .then(
          (response) => {
            this.getData();
          },
          (error) => console.log(error)
        )
      this.confirmSwal.show();
      this.activeModal.close();
    }, 300);
  }

  declineOrder() {
    this.order.Status = 'Declined'
    setTimeout(() => {
      this.orderService.edit(this.order)
        .then(
          (response) => {
            this.getData();
          },
          (error) => console.log(error)
        )
      this.cancelSwal.show();
      this.activeModal.close();
    }, 300);
  }

  closeModal() {
    this.activeModal.dismiss();
  }
  
}
