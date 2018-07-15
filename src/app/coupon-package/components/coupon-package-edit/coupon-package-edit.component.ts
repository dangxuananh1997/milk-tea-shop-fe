import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CouponPackage } from '../../models/coupon-package';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-couponPackage-edit',
  templateUrl: './coupon-package-edit.component.html',
  styleUrls: ['./coupon-package-edit.component.css']
})
export class CouponPackageEditComponent implements OnInit, OnChanges {
  url: string = '';
  @Input() couponPackage: CouponPackage;
  editCouponPackage: CouponPackage;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.editCouponPackage = { ...this.couponPackage };
  }

  ngOnChanges() {
    this.editCouponPackage = { ...this.couponPackage };
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
        this.editCouponPackage.Picture = btoa(event.target.result);
      }
      base64Reader.readAsBinaryString(event.target.files[0]);
    }
  }

  cancelEdit() {
    this.activeModal.dismiss();
  }

  saveCouponPackage() {
    this.activeModal.close(this.editCouponPackage);
  }

}
