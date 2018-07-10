import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from './global-variables.service';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor(public globalVariable: GlobalVariablesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.globalVariable.enableLoadingSpinner.emit(true);
    
    // var token: Token = JSON.parse(localStorage.getItem('HIBILLINGACCESSTOKEN'));
    // if (token != null) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token.access_token}`
    //     }
    //   });
    // }

    let httpRequest = next.handle(request);
    httpRequest.subscribe(
      () => { },
      () => { },
      () => { this.globalVariable.enableLoadingSpinner.emit(false); }
    );
    

    return httpRequest;
  }
}
