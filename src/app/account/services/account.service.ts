import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Account } from '../models/account';
import { environment } from '../../../environments/environment';
import { Data } from '../../shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  get(pageIndex: number, searchValue: string): Promise<Data<Account>> {
    return new Promise<Data<Account>>((resolve, reject) => {
      this.httpClient.get(`${environment.apiLink}Users/Get?pageIndex=${pageIndex}&searchValue=${searchValue}`)
        .subscribe(
          (response: Data<Account>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
