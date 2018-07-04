import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from "../../models/product";
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  products: Product[];
  addingProduct: Product = null;
  editingProduct: Product = null;
  deletingProduct: Product = null;

  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.productService.get()
      .then(
        (response) => {
          this.products = response;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  openAddModel() {
    const modalRef = this.modalService.open(ProductAddComponent);
  }

  openEditModel() {
    const modalRef = this.modalService.open(ProductEditComponent);
    modalRef.componentInstance.product = this.editingProduct;
    modalRef.result.then(
      (product) => {
        console.log(product);
      },
      () => {}
    );
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
  
  editProduct(product: Product) {
    //implement code here
    this.productService.edit();
  }

  deleteProduct(product: Product) {
    //implement code here
    this.productService.delete();
  }

}
