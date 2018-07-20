import { Variant } from "./variant";

export class OrderDetails {
  Id: number;
  OrderId: number;
  Quantity: number;
  UnitPrice: number;
  ProductVariant: Variant[];
}