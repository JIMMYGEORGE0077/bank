import { TestBed } from '@angular/core/testing';

import { JimService } from './jim.service';

describe('JimService', () => {
  let service: JimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
