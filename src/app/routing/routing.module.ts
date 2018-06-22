import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../shared/components/home/home.component";
import { LoginComponent } from "../shared/components/login/login.component";
import { AuthGuardService } from './auth-guard.service';
import { AdminHomeComponent } from '../shared/components/admin-home/admin-home.component';

const appRoutes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], data: { expectedRole: 'user' } },
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AuthGuardService], data: {expectedRole: 'admin'} },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
