import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr;
@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>UpComming Angualr Events</h1>
  </div>
  <hr>
  <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail
        [event]="event"
        (eventClick)="handlerEventClicked($event)"
        (click)="HangleOnClickToastr(event.name)"
      >
      </event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) {}

  handlerEventClicked(data) {
    console.log('Received data:: ', data);
  }

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data['events']
  }

  HangleOnClickToastr(eventName) {
    this.toastrService .success(eventName);
  }
}
