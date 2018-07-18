import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AccountService } from './services/account.service';
import { RoutingModule } from '../routing/routing.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HttpRequestInterceptorService } from './services/http-request-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalVariablesService } from './services/global-variables.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RoutingModule,
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    LoginComponent,
    LoadingSpinnerComponent
  ],
  providers: [
    AccountService,
    GlobalVariablesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
