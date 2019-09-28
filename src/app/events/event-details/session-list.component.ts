import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[] = [];

  constructor(private voterService: VoterService, private auth: AuthService) {}
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      if (this.sortBy == 'name') {
        this.visibleSessions.sort(sortByName);
      } else {
        this.visibleSessions.sort(sortByVotes)
      }
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'voters') {
      this.visibleSessions.sort(sortByVotes);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() == filter;
      });
    }
  }
}
function sortByName(s1 :ISession, s2: ISession) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}
function sortByVotes(s1 :ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}