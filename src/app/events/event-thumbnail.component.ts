import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name | titlecase}}</h2>
    <div>Date: {{event.date | date:'shortDate'}}</div>
    <div
      [ngStyle]="getStartTimeStyle()"
      [ngClass]="getStartTimeClass()"
      [ngSwitch]="event.time">
      Time: {{event.time | uppercase}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'9:00 am'">(Normal Start)</span>
      <span *ngSwitchDefault>(Late Start)</span>
    </div>
    <div>Price: {{event.price | currency:'INR'}}</div>
    <div *ngIf="event.location">
      <span>
        <i class='glyphicon glyphicon-map-marker'></i>
        Location: {{ event.location.address }}
      </span>
      <span class="pad-left">{{ event.location.city }}
        {{ event.location.country | uppercase }}
      </span>
    </div>
    <div *ngIf="event.onlineUrl">
    Online Loaction : {{ event.onlineUrl}}</div>
  </div>
  `,
  styles: [`
    .pad-left { margin-left: 20px;}
    .well div { color: #bbb;}
    .thumbnail { min-height: 210px;}
    .green { color: green !important;}
    .bold { font-weight: bold;}
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  handlerClickMe() {
    console.log('Child Componet::', this.event.name);
    this.eventClick.emit(this.event.name);
  }
  getStartTimeClass() {
    const isClass = this.event.time === '9:00 am'
    return {green: isClass, bold: isClass};
  }
  getStartTimeStyle(): any {
    if (this.event.time === '8:00 am') {
      return { 'color': 'red', 'font-weight': 'bold'};
    } else {
      return {};
    }
  }
}
