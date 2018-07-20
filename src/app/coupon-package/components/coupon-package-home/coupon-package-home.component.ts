import { Component, OnInit, ViewChild, Inject, HostListener, Output } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CouponPackage } from "../../models/coupon-package";
import { CouponPackageAddComponent } from '../coupon-package-add/coupon-package-add.component';
import { CouponPackageEditComponent } from '../coupon-package-edit/coupon-package-edit.component';
import { CouponPackageService } from '../../services/coupon-package.service';

@Component({
  selector: 'app-coupon-package-home',
  templateUrl: './coupon-package-home.component.html',
  styleUrls: ['./coupon-package-home.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('0.8s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true }),

        query(':leave', stagger('200ms', [
          animate('0.8s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
          ]))
        ]), { optional: true }),


      ])
    ])
  ]
})
export class CouponPackageHomeComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  couponPackages: CouponPackage[] = [];
  editingCouponPackage: CouponPackage;
  deletingCouponPackage: CouponPackage;
  pageIndex: number = 1;
  textSearch: string = '';
  total: number = 0;

  constructor(
    private modalService: NgbModal,
    private couponPackageService: CouponPackageService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if ((event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) 
    && (this.couponPackages.length < this.total)){
      this.pageIndex++;
      this.getData();
    }
  }

  resetData() {
    this.pageIndex = 1;
    this.couponPackages = [];
    this.getData();
    this.editingCouponPackage = null;
    this.deletingCouponPackage = null;
    this.total = 0;
  }

  getData() {
    this.couponPackageService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.couponPackages = this.couponPackages.concat(response.Data);
          this.total = response.Total;
        },
        (error) => { }
      )
  }

  searchData(searchValue: string) {
    this.textSearch = searchValue;
    this.resetData();
  }

  addCouponPackage() {
    const modalRef = this.modalService.open(CouponPackageAddComponent);
    modalRef.result.then(
      (couponPackageAdd) => {
        this.couponPackageService.create(couponPackageAdd).then(
          (response) => { this.resetData(); }
        );
      },
      (error) => { console.log(error); }
    );
  }

  editCouponPackage(couponPackageFromItem: CouponPackage) {
    this.editingCouponPackage = couponPackageFromItem;
    const modalRef = this.modalService.open(CouponPackageEditComponent);

    //input to modal
    modalRef.componentInstance.couponPackage = this.editingCouponPackage;

    //return from modal
    modalRef.result.then(
      (couponPackageAfterChange) => {
        this.editingCouponPackage = couponPackageAfterChange;
        
        this.couponPackageService.edit(this.editingCouponPackage)
          .then(
            () => { this.resetData(); }
          );
      },
      (dismiss) => { }
    );
  }

  showConfirmDelete(couponPackageFromItem: CouponPackage) {
    this.deletingCouponPackage = couponPackageFromItem;
    setTimeout(() => {
      this.deleteSwal.show();
    }, 300);
  }

  deleteCouponPackage() {
    this.couponPackageService.delete(this.deletingCouponPackage.Id)
      .then(
        () => { this.resetData(); }
      );
  }
}
