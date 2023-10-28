import { TestBed } from '@angular/core/testing';

import { StartLoadService } from './start-load.service';

describe('StartLoadService', () => {
  let service: StartLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
