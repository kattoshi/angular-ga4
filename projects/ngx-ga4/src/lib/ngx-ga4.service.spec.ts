import { TestBed } from '@angular/core/testing';

import { NgxGa4Service } from './ngx-ga4.service';

describe('NgxGa4Service', () => {
  let service: NgxGa4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGa4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
