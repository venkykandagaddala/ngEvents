import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';
import { Session } from 'inspector';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from list of voters', () => {
      const session = {id: 3, voters: ['venky', 'kkkk']};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(6, <ISession>session, 'kkkk');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toEqual('venky');
    });

    it('should call http.delete with right url', () => {
      const session = {id: 3, voters: ['venky', 'kkkk']};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(6, <ISession>session, 'kkkk');
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/6/sessions/3/voters/kkkk');

    });
  });

  describe('addVoter', () => {
    it('should add voter to the list', () => {
      const session = {id: 3, voters: ['venky', 'kkkk']};
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, 'New User');
      expect(session.voters.length).toBe(3);
      expect(session.voters.includes('New User')).toBe(true);
    });

    it('should call http.post with right url', () => {
      const session = {id: 3, voters: ['venky', 'kkkk']};
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, 'new-user');
      expect(mockHttp.post)
        .toHaveBeenCalledWith('/api/events/3/sessions/3/voters/new-user', {}, jasmine.any(Object));
    });
  });
});
