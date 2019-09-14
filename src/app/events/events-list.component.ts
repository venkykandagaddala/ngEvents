import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>UpComming Angualr Events</h1>
  </div>
  <hr>
  <event-thumbnail
    #thumbnail
    [event]="event1"
    (eventClick)="handlerEventClicked($event)"
  >
  </event-thumbnail>
  <h3>{{ thumbnail.someProperty }}</h3>
  <button class="btn btn-primary" (click)="thumbnail.testLog()">Template Variable Example</button>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Component',
    date: '10/09/2020',
    time: '10:00 AM',
    price: '999.0',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '#180, 2nd Avenue,',
      city: 'London',
      country: 'England'
    }
  };

  handlerEventClicked(data) {
    console.log('Received data:: ', data);

  }
}
