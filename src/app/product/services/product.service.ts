import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  get(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      this.httpClient.get(environment.apiLink + 'Products/Get')
        .subscribe(
          (response: Product[]) => {
            resolve(response)
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  edit() {

  }

  delete() {

  }
  
}
