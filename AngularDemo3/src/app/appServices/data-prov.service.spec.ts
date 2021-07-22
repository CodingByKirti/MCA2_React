import { TestBed } from '@angular/core/testing';

import { DataProvService } from './data-prov.service';

describe('DataProvService', () => {
  let service: DataProvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
