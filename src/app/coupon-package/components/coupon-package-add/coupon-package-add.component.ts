import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponPackage } from '../../models/coupon-package';

@Component({
  selector: 'app-coupon-package-add',
  templateUrl: './coupon-package-add.component.html',
  styleUrls: ['./coupon-package-add.component.css']
})
export class CouponPackageAddComponent implements OnInit {
  url: string = '';
  couponPackage: CouponPackage = new CouponPackage();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  changeImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var urlReader = new FileReader();
      urlReader.onload = (event: any) => {
        this.url = event.target.result;
      }
      urlReader.readAsDataURL(event.target.files[0]);

      var base64Reader = new FileReader();
      base64Reader.onload = (event: any) => {
        this.couponPackage.Picture = btoa(event.target.result);
      }
      base64Reader.readAsBinaryString(event.target.files[0]);
    }
  }

  cancelAdd() {
    this.activeModal.dismiss();
  }

  createCouponPackage() {
    this.activeModal.close(this.couponPackage);
  }
}
