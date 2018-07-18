import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.css']
})
export class OrderHomeComponent implements OnInit {
  @ViewChild('acceptSwal') private acceptSwal: SwalComponent;
  @ViewChild('declineSwal') private declineSwal: SwalComponent;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('cancelSwal') private cancelSwal: SwalComponent;
  acceptingOrder: Order;
  decliningOrder: Order;
  viewingOrder: Order;
  orders: Order[] = [];
  pageIndex: number = 1;
  textSearch: string = '';
  total: number = 0;

  constructor(
    private orderService: OrderService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if ((event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight)
      && (this.orders.length < this.total)) {
      this.pageIndex++;
      this.getData();
    }
  }

  resetData() {
    this.pageIndex = 1;
    this.orders = [];
    this.getData();
    this.total = 0;
  }

  getData() {
    this.orderService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.orders = this.orders.concat(response.Data);
          this.total = response.Total;
        },
        (error) => { console.error(error); }
      )
  }

  searchData(searchValue: string) {
    this.textSearch = searchValue;
    this.resetData();
  }

  // acceptOrder(acceptingOrder: Order) {
  //   this.acceptingOrder.Status = 'Approved';
  //   this.acceptingOrder = acceptingOrder; 
  //   setTimeout(() => {
  //     this.orderService.edit(acceptingOrder)
  //       .then(
  //         (response) => {
  //           this.getData();
  //         },
  //         (error) => console.log(error)        
  //       )
  //     this.confirmSwal.show();
  //   }, 300);
  // }

  // declineOrder(decliningOrder: Order) {
  //   this.decliningOrder.Status = 'Declined';
  //   this.decliningOrder = decliningOrder;
  //   setTimeout(() => {
  //     this.orderService.edit(decliningOrder)
  //       .then(
  //         (response) => {
  //           this.getData();
  //         },
  //         (error) => console.log(error)
  //       )
  //     this.cancelSwal.show();
  //   }, 300);
  // }

  // searchData(searchValue: string) {
  //   this.textSearch = searchValue;
  //   this.resetData();
  // }

  // showApprove(orderFromItem: Order) {
  //   this.acceptingOrder = orderFromItem;
  //   setTimeout(() => {
  //     this.acceptSwal.show();
  //   }, 300);
  // }

  // showDecline(orderFromItem: Order) {
  //   this.decliningOrder = orderFromItem;
  //   setTimeout(() => {
  //     this.declineSwal.show();
  //   }, 300);
  // }

  viewDetails(order: Order) {
    const modalRef = this.modalService.open(OrderDetailComponent);

    modalRef.componentInstance.order = order;

    modalRef.result.then(
      () => { },
      (error) => { console.log(error); }
    );
  }

}
