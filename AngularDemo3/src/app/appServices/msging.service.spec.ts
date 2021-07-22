import { TestBed } from '@angular/core/testing';

import { MsgingService } from './msging.service';

describe('MsgingService', () => {
  let service: MsgingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
