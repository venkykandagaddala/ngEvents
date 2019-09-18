import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: "./profile.component.html",
  styles: [
    `
      em { color: red; float: right;}
      .field-error { border: 1px solid red}
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService) {}
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName);
    this.lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({firstName: this.firstName, lastName: this.lastName});
  }
  handlerClick() {
    this.router.navigate(['events']);
  }
  submitProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateProfile(formValues.firstName, formValues.lastName);
      this.toastr.success('successfully updated the user profile.');
      this.router.navigate(['events']);
    } else {
      this.toastr.error('Please enter the required fields.');
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

}
