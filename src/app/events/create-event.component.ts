import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  template: `
    <div class='row'>
      <h1>Create New Event </h1>
    </div>
    <div class='row'>
      <h2>Implementation goes here....</h2>
    </div>
    <div class='row'>
      <button class='btn btn-success'>Save</button> &nbsp;
      <button class='btn btn-warning' (click)="handlerClick()">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {

  constructor(private router: Router) {}
  handlerClick() {
    this.router.navigate(['/events']);
  }
}
