export class Variant {
  Id: number;
  ProductId: number;
  Price: number;
  Size: number;

  constructor(productId: number) {
    this.Id = -1;
    this.ProductId = productId;
    this.Price = 0;
    this.Size = 0;
  }
}


