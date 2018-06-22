import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from './services/account.service';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminHomeComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AccountService
  ]
})
export class SharedModule { }
