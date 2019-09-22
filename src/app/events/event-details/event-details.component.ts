import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container { padding-left: 20px; padding-right: 20px; }
      .event-image { height: 100px; }
      b {font-size: 25px;}
      a { cursor: pointer;}
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  newMode: boolean = false;
  filterBy: string = "all";
  sortBy: string = 'name';
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }

  addSession() {
    this.newMode = true;
   }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.newMode = false;
  }

  cancelAddSession() {
    this.newMode = false;
  }

}
