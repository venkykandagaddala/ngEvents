import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(email: string, password: string) {
    return this.currentUser = {
      id: 1,
      firstName: 'venky',
      lastName: 'kandagaddala',
      userName: 'venky1025'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
