import { TestBed } from '@angular/core/testing';

import { TimeZonesService } from './time-zones.service';

describe('TimeZonesService', () => {
  let service: TimeZonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeZonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
