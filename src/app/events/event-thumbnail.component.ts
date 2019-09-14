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
      <span>Location: {{ event.location.address }}</span>
      <span class="pad-left">{{ event.location.city }}
        {{ event.location.country | uppercase }}
      </span>
    </div>
  </div>
  `,
  styles: [`
    .pad-left { margin-left: 20px;}
    .well div { color: #bbb}
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  handlerClickMe() {
    console.log('Child Componet::', this.event.name);
    this.eventClick.emit(this.event.name);
  }
}
