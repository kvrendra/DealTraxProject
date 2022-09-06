import { TestBed } from '@angular/core/testing';

import { GetAllRolesService } from './get-all-roles.service';

describe('GetAllRolesService', () => {
  let service: GetAllRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
