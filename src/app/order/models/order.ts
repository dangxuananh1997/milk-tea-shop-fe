import { OrderDetails } from "./order-details";

export class Order {
  Id: number;
  UserId: number;
  TotalPrice: number;
  PaymentType: number;
  Status: string;
  CouponItemId: number;
  OrderDate: string;
  OrderDetails: OrderDetails[];
}