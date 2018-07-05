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
  addingProduct: Product = null;
  editingProduct: Product = null;
  deletingProduct: Product = null;
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

  getData() {
    this.productService.get(this.pageIndex, this.textSearch)
      .then(
        (response) => {
          this.products = this.products.concat(response);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  searchData(searchValue: string) {
    this.pageIndex = 1;
    this.products = [];
    this.textSearch = searchValue;
    this.getData();
  }

  editProduct(product: Product) {
  }

  deleteProduct(product: Product) {
    this.productService.delete(this.deletingProduct.Id);
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
      () => { }
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


}
