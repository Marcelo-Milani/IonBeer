import { TestBed } from '@angular/core/testing';

import { MalteService } from './malte.service';

describe('MalteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalteService = TestBed.get(MalteService);
    expect(service).toBeTruthy();
  });
});
