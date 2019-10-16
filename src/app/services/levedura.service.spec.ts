import { TestBed } from '@angular/core/testing';

import { LeveduraService } from './levedura.service';

describe('LeveduraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeveduraService = TestBed.get(LeveduraService);
    expect(service).toBeTruthy();
  });
});
