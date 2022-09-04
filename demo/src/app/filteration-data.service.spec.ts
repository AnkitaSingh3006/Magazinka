import { TestBed } from '@angular/core/testing';

import { FilterationDataService } from './filteration-data.service';

describe('FilterationDataService', () => {
  let service: FilterationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
