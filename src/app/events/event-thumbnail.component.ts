import { Component, Input } from '@angular/core';

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
  </div>
  `
})
export class EventThumbnailComponent{
  @Input() event: any;
}
