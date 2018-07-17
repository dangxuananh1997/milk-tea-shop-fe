import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';
import { Data } from '../../shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  get(pageIndex: number, searchValue: string): Promise<Data<Product>> {
    return new Promise<Data<Product>>((resolve, reject) => {
      this.httpClient.get(`${environment.apiLink}Products/Get?pageIndex=${pageIndex}&searchValue=${searchValue}`)
        .subscribe(
        (response: Data<Product>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  create(data: Product): Promise<Data<Product>> {
    return new Promise<Data<Product>>((resolve, reject) => {
      this.httpClient.post(`${environment.apiLink}Products/Create`, data)
        .subscribe(
        (response: Data<Product>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });
  }

  edit(data: Product): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.put(`${environment.apiLink}Products/Update`, data)
        .subscribe(
          (response: boolean) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  delete(Id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.delete(`${environment.apiLink}Products/Delete/${Id}`)
      .subscribe(
        (response: any) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      )
    })
  }
  
}
