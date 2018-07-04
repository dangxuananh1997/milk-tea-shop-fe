import { Component, OnInit, ViewChild } from '@angular/core';
import { PRODUCTS, Product } from "../../models/product";
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  products = PRODUCTS;
  addingProduct: Product = null;
  editingProduct: Product = null;
  deletingProduct: Product = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openAddModel() {
    const modalRef = this.modalService.open(ProductAddComponent);
  }

  openEditModel() {
    const modalRef = this.modalService.open(ProductEditComponent);
    modalRef.componentInstance.product = this.editingProduct;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }

  setEditingProduct(product: Product) {
    this.editingProduct = product;
    this.openEditModel();
  }

  setDeletingProduct(product: Product) {
    this.deletingProduct = product;
    setTimeout(() => {
      this.deleteSwal.show();
    }, 300);
  }

  deleteProduct(product: Product) {
    
  }
  
  editProduct(product: Product) {

  }

}
