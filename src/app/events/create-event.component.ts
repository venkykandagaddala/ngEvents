import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { TOASTR_TOKEN, IToastr } from '../common/toastr.service';
import { EventService } from './shared';

@Component({
  templateUrl: './create.event.component.html',
  styles: [
    `
      em { color: red; float: right;}
      .error input { background-color: #E3C3C5;}
    `
  ]
})
export class CreateEventComponent {

  isDirty: boolean = true;
  newEvent;
  newEventForm;
  constructor(
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr,
    private eventService: EventService
  ) {}
  handlerClick() {
    this.router.navigate(['/events']);
  }
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.toastr.success('Successfully created the new event.');
      this.router.navigate(['events']);
    });
  }
}
