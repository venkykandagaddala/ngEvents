import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>&nbsp;&nbsp;
      <span>{{ event.location.city }}</span>,
      <span>{{ event.location.country | uppercase }}</span>
    </div>
    <div>
      <button class='btn btn-success' (click)="handlerClickMe()">Click me!</button>
    </div>
  </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty: string = 'Child property...';

  handlerClickMe() {
    console.log('Child Componet::', this.event.name);
    this.eventClick.emit(this.event.name);
  }
  testLog() {
    console.log('From Child component....');
  }

}
