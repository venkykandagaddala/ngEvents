import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.css',
  template: `
    <div class='votingWidgentContainer pointable' (click)='onClick()'>
      <div class='well voitingWidget'>
        <i class='glyphicon glyphicon-heart' [style.color]='iconColor'></i>
      </div>
      <div class='badge badge-inverse votingCount'>
        <div> {{ count }}
      </div>
    </div>
  `
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;
  onClick() {
    this.vote.emit({});
  }
}
