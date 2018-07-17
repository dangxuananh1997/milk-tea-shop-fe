import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Order } from '../models/order';
import { Data } from '../../shared/models/data';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {}

  get(pageIndex: number, searchValue: string): Promise<Data<Order>>{
    return new Promise<Data<Order>>((resolve, reject) => {
      this.httpClient.get(`${environment.apiLink}Orders/Get?pageIndex=${pageIndex}&searchValue=${searchValue}`)
        .subscribe(
          (response: Data<Order>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getById(orderId: number): Promise<Order> {
    return new Promise<Order>((resolve, reject) => {
      this.httpClient.get(`${environment.apiLink}Orders/Get/${orderId}`)
        .subscribe(
          (response: Order) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    })
  }

  edit(data: Order): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.put(`${environment.apiLink}Orders/Update`, data)
        .subscribe(
          (response: boolean) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    })
  }
}
