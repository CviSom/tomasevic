import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { User } from '../../../shared/model/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  login(email, password) {
    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigateByUrl('/');
      }, (err: HttpErrorResponse) => {
        alert(`${err.error.error}`);
      }
    );
  }

  ngOnInit() {
  }

}
