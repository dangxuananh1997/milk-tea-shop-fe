export class Product {
  Id: number;
  ProductName: string;
  Picture: string;

  constructor() {
    this.Id = -1;
    this.ProductName = '';
    this.Picture = '';
  }
}

export const PRODUCTS = [
  { Id: 1, ProductName: 'Trà sữa 1', Picture: 'assets/images/product.png'},
  { Id: 2, ProductName: 'Trà sữa 2', Picture: 'assets/images/product.png'},
  { Id: 3, ProductName: 'Trà sữa 3', Picture: 'assets/images/product.png'},
  { Id: 4, ProductName: 'Trà sữa 4', Picture: 'assets/images/product.png'},
  { Id: 5, ProductName: 'Trà sữa 5', Picture: 'assets/images/product.png'},
]