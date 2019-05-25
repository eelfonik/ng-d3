import { TestBed } from '@angular/core/testing';

import { VizConsoleService } from './viz-console.service';

describe('VizConsoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VizConsoleService = TestBed.get(VizConsoleService);
    expect(service).toBeTruthy();
  });
});
