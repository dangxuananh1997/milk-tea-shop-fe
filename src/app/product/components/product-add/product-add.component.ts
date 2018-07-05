import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  url: string = '';
  product: Product = new Product();

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
        this.product.Picture = btoa(event.target.result);
      }
      base64Reader.readAsBinaryString(event.target.files[0]);
    }
  }

  cancelAdd() {
    this.activeModal.dismiss();
  }

  createProduct() {
    this.activeModal.close(this.product);
  }
}
