import { Component, OnInit, ViewChild, Inject, HostListener, Output } from '@angular/core';
import { CouponPackage } from "../../models/coupon-package";
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponPackageAddComponent } from '../coupon-package-add/coupon-package-add.component';
import { CouponPackageEditComponent } from '../coupon-package-edit/coupon-package-edit.component';
import { CouponPackageService } from '../../services/coupon-package.service';

@Component({
  selector: 'app-coupon-package-home',
  templateUrl: './coupon-package-home.component.html',
  styleUrls: ['./coupon-package-home.component.css']
})
export class CouponPackageHomeComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  couponPackages: CouponPackage[] = [];
  editingCouponPackage: CouponPackage;
  deletingCouponPackage: CouponPackage;
  pageIndex: number = 1;
  textSearch: string = '';

  constructor(
    private modalService: NgbModal,
    private couponPackageService: CouponPackageService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) {
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
  }

  getData() {
    this.couponPackageService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.couponPackages = this.couponPackages.concat(response);
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
