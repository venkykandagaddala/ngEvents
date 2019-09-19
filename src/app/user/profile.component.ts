import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { color: red; float: right;}
    .error input { background-color: #E3C3C5;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName;
  private lastName;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) {}
  ngOnInit() {
    this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      [Validators.required, Validators.minLength(6)]
    );
    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
        [Validators.required, Validators.pattern('[a-zA-Z ]*')]
      );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateProfile(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
      this.toastr.success('Successfully updated the profile.');
    } else {
      this.toastr.error('Please add missing fields.');
    }
  }

  cancle() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
