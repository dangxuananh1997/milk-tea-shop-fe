import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../../models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {
  url: string = '';
  @Input() product: Product;
  editProduct: Product;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.editProduct = { ...this.product };
  }

  ngOnChanges() {
    this.editProduct = { ...this.product };
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
        this.editProduct.Picture = btoa(event.target.result);
      }
      base64Reader.readAsBinaryString(event.target.files[0]);
    }
  }

  cancelEdit() {
    this.activeModal.dismiss();
  }

  saveProduct() {
    this.activeModal.close(this.editProduct);
  }

}
