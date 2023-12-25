import { TestBed } from '@angular/core/testing';

import { DirectoryServiceService } from './directory-service.service';

describe('DirectoryServiceService', () => {
  let service: DirectoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
