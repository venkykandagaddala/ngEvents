import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  template: `
    <div>
      <h1>Create New Event </h1>
    </div>
    <hr>
    <div>
      <h2>Implementation goes here....</h2>
    </div>
    <br>
    <div>
      <button class='btn btn-success'>Save</button> &nbsp;
      <button class='btn btn-warning' (click)="handlerClick()">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {

  isDirty: boolean = true;
  constructor(private router: Router) {}
  handlerClick() {
    this.router.navigate(['/events']);
  }
}
