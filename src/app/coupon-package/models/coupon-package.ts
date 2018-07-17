export class CouponPackage {
  Id: number;
  Name: string;
  DrinkQuantity: number;
  Price: number;
  Picture: string;

  constructor() {
    this.Id = 0;
    this.Name = '';
    this.DrinkQuantity = null;
    this.Price = null;
    this.Picture = '';
  }
}
