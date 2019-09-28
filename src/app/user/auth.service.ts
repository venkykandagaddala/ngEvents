import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    const loginInfo = {username: userName, password: password};
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
         return of(false);
      }));
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      })).subscribe();
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
