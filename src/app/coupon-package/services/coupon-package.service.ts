import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CouponPackage } from '../models/coupon-package';
import { Data } from '../../shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class CouponPackageService {

  constructor(public httpClient: HttpClient) { }

  get(pageIndex: number, searchValue: string): Promise<Data<CouponPackage>> {
    return new Promise<Data<CouponPackage>>((resolve, reject) => {
      // this.httpClient.get(`${environment.apiLink}CouponPackages/Get`)
      this.httpClient.get(`${environment.apiLink}CouponPackages/Get?pageIndex=${pageIndex}&searchValue=${searchValue}`)
        .subscribe(
        (response: Data<CouponPackage>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  create(data: CouponPackage): Promise<CouponPackage> {
    return new Promise<CouponPackage>((resolve, reject) => {
      this.httpClient.post(`${environment.apiLink}CouponPackages/Create`, data)
        .subscribe(
          (response: CouponPackage) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });
  }

  edit(data: CouponPackage): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.put(`${environment.apiLink}CouponPackages/Update`, data)
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
      this.httpClient.delete(`${environment.apiLink}CouponPackages/Delete/${Id}`)
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
