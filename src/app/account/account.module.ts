import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AccountHomeComponent } from './components/account-home/account-home.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { AccountSearchComponent } from './components/account-search/account-search.component';
import { AccountService } from './services/account.service';
@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AccountHomeComponent, 
    AccountItemComponent, 
    AccountSearchComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
