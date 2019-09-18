import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em { color: red; float: right;}
      .field-error { border: 1px solid red}
    `
  ]
})
export class LoginComponent {
  login: string;
  password: string;
  mouseoverLogin: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {}

  loginFormSubmit(formValues) {
    this.authService.loginUser(formValues.email, formValues.password);
    this.toastr.success('successfully signedup.');
    this.router.navigate(['events']);
  }

  handlerClick() {
    this.router.navigate(['events']);
  }
}
