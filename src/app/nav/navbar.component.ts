import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px;}
    #searchForm { margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none;}}
    .nav li > a.active { color: orange;}
  `]
})
export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(private auth: AuthService, private eventService: EventService) {

  }

  searchSesions(searchForm) {
    this.eventService.searchSessions(searchForm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }

}
