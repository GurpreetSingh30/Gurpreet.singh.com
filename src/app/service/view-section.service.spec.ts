import { TestBed } from '@angular/core/testing';

import { ViewSectionService } from './view-section.service';

describe('ViewSectionService', () => {
  let service: ViewSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
