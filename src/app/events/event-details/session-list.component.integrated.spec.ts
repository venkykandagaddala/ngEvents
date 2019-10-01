import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsableWellComponent } from 'src/app/common';


describe('SessionListComponent', () => {
  let fixter: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;
  beforeEach(async() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'asdfg' }
    };
    let mockVoterService = {
      userHasVoted: () => {
        return true;
      }
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsableWellComponent

      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService}
      ],
      schemas: []

    });
  });
  beforeEach(() => {
    fixter = TestBed.createComponent(SessionListComponent);
    component = fixter.componentInstance;
    debugElement = fixter.debugElement;
    element = fixter.nativeElement;
  });


  describe('initial dispaly', () => {

    it('should have the corrent session title', () => {
      component.sessions = [
        { id: 3,
          name: 'session 1',
          presenter: 'venky',
          duration: 1,
          level: 'beginner',
          abstract: '',
          voters: ['kk', 'bbb']
        }
      ];
      component.filterBy = 'all';
      component.eventId = 10;
      component.sortBy = 'name';
      component.ngOnChanges();
      fixter.detectChanges();
      expect(element.querySelector('[well-title]').textContent).toContain('session 1');
      expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1');
    });
  });
});


