import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

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
      <event-thumbnail [event]="event">
      </event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data['events'];
  }
}
