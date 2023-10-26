import { TestBed } from '@angular/core/testing';

import { ActorPersonalService } from './actor-personal.service';

describe('ActorPersonalService', () => {
  let service: ActorPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
