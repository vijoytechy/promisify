import { TestBed } from '@angular/core/testing';

import { VersestoreService } from './versestore.service';

describe('VersestoreService', () => {
  let service: VersestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
