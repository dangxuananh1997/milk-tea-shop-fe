import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Variant } from '../../models/variant';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { VariantService } from "../../services/variant.service";

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrls: ['./product-variant.component.css']
})
export class ProductVariantComponent implements OnInit {
  @ViewChild('deletevariantSwal') private deleteSwal: SwalComponent;
  @ViewChild('error') private errorSwal: SwalComponent;
  @Input() productId: number;
  variants: Variant[] = [];
  addingVariant: Variant;
  deletingVariant: Variant;
  isEditing: number = 0;
  isAdding: boolean = false;

  constructor(
    private activeModal: NgbActiveModal,
    private variantService: VariantService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.addingVariant = new Variant(this.productId);
    this.getData();
  }

  getData() {
    this.variantService.get(this.productId)
      .then(
        (response: Variant[]) => {
          this.variants = response;
          this.variants = this.variants.sort((a, b) => a.Size - b.Size);
        }
      )
  }

  cancelEditVariant() {
    this.activeModal.dismiss();
  }

  createVariant() {
    this.variantService.create(this.addingVariant).then(
      () => {
        this.getData();
        this.isAdding = false;
        this.addingVariant = new Variant(this.productId);
      },
      () => {
        this.errorSwal.show();
      }
    );
  }

  editVariant(variant: Variant) {
    variant.ProductId = this.productId;
    this.variantService.edit(variant) 
    .then(
      () => { 
          this.isEditing = 0;
          this.getData();
        },
        () => { }
      );
  }

  showConfirmDeleteVariant(deletingVariant: Variant) {
    this.deletingVariant = deletingVariant;
    setTimeout(() => {
      this.deleteSwal.show();
    }, 300);
  }

  deleteVariant() {
    this.variantService.delete(this.deletingVariant.Id)
      .then(
        () => {
          this.getData();
        }
      );
  }

}
