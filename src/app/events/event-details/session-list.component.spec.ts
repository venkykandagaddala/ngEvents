import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component =  new SessionListComponent(mockAuthService, mockVoterService);
  });
  describe('onChange', () => {
    it('should filter the sessions', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' },
        { name: 'session 3', level: 'intermediate' }
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions[1].level).toEqual('intermediate');
    });
  });


  describe('onChange', () => {
    it('should filter the sessions with name', () => {
      component.sessions = <ISession[]>[
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 1', level: 'beginner' },
        { name: 'session 2', level: 'intermediate' }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions.length).toBe(3);
      expect(component.visibleSessions[2].name).toEqual('session 3');
    });
  });

});
