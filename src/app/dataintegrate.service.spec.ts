import { TestBed } from '@angular/core/testing';

import { DataintegrateService } from './dataintegrate.service';

describe('DataintegrateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataintegrateService = TestBed.get(DataintegrateService);
    expect(service).toBeTruthy();
  });
});
