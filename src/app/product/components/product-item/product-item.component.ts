import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteProduct.emit(this.product);
  }

  edit() {
    this.editProduct.emit(this.product);
  }

}
