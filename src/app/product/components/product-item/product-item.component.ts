import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { Variant } from "../../models/variant";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() editVariant = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteProduct.emit(this.product);
  }

  edit() {
    this.editProduct.emit(this.product);
  }

  edtVariant() {
    this.editVariant.emit(this.product.Id);
  }

}
