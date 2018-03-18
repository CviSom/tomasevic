import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';

const appRoutes: Routes = [
  { path: '',
  redirectTo: '#',
  pathMatch: 'full',
},
{ path: 'login',
  component: LoginComponent
},
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
