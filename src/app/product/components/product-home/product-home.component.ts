import { Component, OnInit, ViewChild, Inject, HostListener, Output } from '@angular/core';
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
  products: Product[] = [];
  editingProduct: Product;
  deletingProduct: Product;
  pageIndex: number = 1;
  textSearch: string = '';

  constructor(
    private modalService: NgbModal,
    private productService: ProductService

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
    this.products = [];
    this.getData();
    this.editingProduct = null;
    this.deletingProduct = null;
  }

  getData() {
    this.productService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.products = this.products.concat(response);
        },
        (error) => { console.error(error); }
      )
  }

  searchData(searchValue: string) {
    this.textSearch = searchValue;
    this.resetData();
  }

  addProduct() {
    const modalRef = this.modalService.open(ProductAddComponent);
    modalRef.result.then(
      (productAdd) => {
        this.productService.create(productAdd).then(
          (response) => { this.resetData(); }
        );
      },
      (error) => { console.log(error); }
    );
  }

  editProduct(productFromItem: Product) {
    this.editingProduct = productFromItem;
    const modalRef = this.modalService.open(ProductEditComponent);

    //input to modal
    modalRef.componentInstance.product = this.editingProduct;

    //return from modal
    modalRef.result.then(
      (productAfterChange) => {
        this.editingProduct = productAfterChange;
        this.productService.edit(this.editingProduct)
          .then(
            () => { this.resetData(); } 
          );
      },
      (dismiss) => {  }
    );
  }

  showConfirmDelete(productFromItem: Product) {
    this.deletingProduct = productFromItem;
    setTimeout(() => {
      this.deleteSwal.show();
    }, 300);
  }

  deleteProduct() {
    this.productService.delete(this.deletingProduct.Id)
      .then(
        () => { this.resetData(); }
      );
  }

}
