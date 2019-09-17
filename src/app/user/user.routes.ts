import { ProfileComponent } from './profile.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

export const userRoutes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent }
];
