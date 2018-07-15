import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { AccountSearchComponent } from './components/account-search/account-search.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { SweetAlert2Module } from '../../../node_modules/@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AccountHomeComponent, 
    AccountItemComponent, 
    AccountSearchComponent
  ]
})
export class AccountModule { }
