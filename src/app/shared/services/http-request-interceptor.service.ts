import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from './global-variables.service';

import { catchError, finalize, map } from 'rxjs/operators';
import { Token } from '../models/token';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor(public globalVariable: GlobalVariablesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.globalVariable.enableLoadingSpinner.emit(true);
    
    var token: Token = JSON.parse(localStorage.getItem('MILK_TEA_SHOP_ACCESS_TOKEN'));
    if (token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.access_token}`
        }
      });
    }

    return next.handle(request).pipe(
      map(event => {
        return event;
      }),
      finalize(() => {
        this.globalVariable.enableLoadingSpinner.emit(false);
      })
    );
  }
}
