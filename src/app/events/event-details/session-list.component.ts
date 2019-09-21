import { Component, Input } from "@angular/core";
import { ISession } from '../shared';

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list'
})
export class SessionListComponent {
  @Input() sessions: ISession;
}
