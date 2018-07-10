import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Variant } from '../models/variant';

@Injectable({
  providedIn: 'root'
})
export class VariantService {

  constructor(public httpClient: HttpClient) { }

  get(productId: number): Promise<Variant[]> {
    return new Promise<Variant[]>((resolve, reject) => {
      this.httpClient.get(`${environment.apiLink}ProductVariants/Get?productId=${[productId]}`)
        .subscribe(
          (response: Variant[]) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
    
  create(data: Variant): Promise<Variant> {
    return new Promise<Variant>((resolve, reject) => {
      this.httpClient.post(`${environment.apiLink}ProductVariants/Create`, data)
        .subscribe(
          (response: Variant) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    })
  }

  edit(data: Variant): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.put(`${environment.apiLink}ProductVariants/Update`, data)
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

  delete(Id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.delete(`${environment.apiLink}ProductVariants/Delete/${Id}`)
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
