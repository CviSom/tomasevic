import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '#', canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'login', canActivate: [GuestGuard], component: LoginComponent},
{ path: 'register', component: RegisterComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
)
  ],

exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
