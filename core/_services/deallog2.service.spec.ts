import { TestBed } from '@angular/core/testing';

import { Deallog2Service } from './deallog2.service';

describe('Deallog2Service', () => {
  let service: Deallog2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deallog2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
