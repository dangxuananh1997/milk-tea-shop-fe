import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  get() {
    this.httpClient.get(environment.apiLink + 'Product');
  }
}
