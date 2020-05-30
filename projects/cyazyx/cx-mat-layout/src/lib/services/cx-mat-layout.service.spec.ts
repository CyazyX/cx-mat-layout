import { TestBed } from '@angular/core/testing';

import { CxMatLayoutService } from './cx-mat-layout.service';

describe('CxMatLayoutService', () => {
  let service: CxMatLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CxMatLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
