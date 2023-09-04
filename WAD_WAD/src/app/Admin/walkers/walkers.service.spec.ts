import { TestBed } from '@angular/core/testing';

import { WalkersService } from './walkers.service';

describe('WalkersService', () => {
  let service: WalkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
