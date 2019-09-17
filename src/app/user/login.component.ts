import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em { color: red; float: right;}
    `
  ]
})
export class LoginComponent {
  login: string;
  password: string;
  mouseoverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  loginFormSubmit(formValues) {
    this.authService.loginUser(formValues.email, formValues.password);
    this.router.navigate(['events']);
  }

  handlerClick() {
    this.router.navigate(['events']);
  }
}
