import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from "../../models/product";
import { Variant } from '../../models/variant';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductVariantComponent } from '../product-variant/product-variant.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('50ms', [
          animate('0.3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(35px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(-35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true }),

        query(':leave', stagger('50ms', [
          animate('0.3s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-35px)', offset: 1 }),
          ]))
        ]), {optional: true}),

         
      ])
    ])
  ]
})
export class ProductHomeComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  products: Product[] = [];
  variants: Variant[] = [];
  editingProduct: Product;
  deletingProduct: Product;
  pageIndex: number = 1;
  textSearch: string = '';
  total: number = 0;

  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onScroll(event: any) {
    if ((event.target.offsetHeight + event.target.scrollTop === event.target.scrollHeight) 
    && (this.products.length < this.total)) {
      this.pageIndex++;
      this.getData();
    }
  }

  resetData() {
    this.pageIndex = 1;
    this.products = [];
    this.variants = [];
    this.getData();
    this.editingProduct = null;
    this.deletingProduct = null;
    this.total = 0;
  }

  getData() {
    this.productService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.products = this.products.concat(response.Data);
          this.total = response.Total;
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
  
  editVariant(productId: number) {
    const modalRef = this.modalService.open(ProductVariantComponent);
    modalRef.componentInstance.productId = productId;
    modalRef.result.then(
      () => { },
      () => { }
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
