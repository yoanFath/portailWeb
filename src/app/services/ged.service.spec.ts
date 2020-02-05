import { TestBed } from '@angular/core/testing';

import { GedService } from './ged.service';

describe('GedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GedService = TestBed.get(GedService);
    expect(service).toBeTruthy();
  });
});
