import { TestBed } from '@angular/core/testing';

import { FinService } from './fin.service';

describe('FinService', () => {
  let service: FinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
