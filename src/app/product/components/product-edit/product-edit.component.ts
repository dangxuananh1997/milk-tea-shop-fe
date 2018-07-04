import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
