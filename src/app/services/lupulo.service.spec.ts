import { TestBed } from '@angular/core/testing';

import { LupuloService } from './lupulo.service';

describe('LupuloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LupuloService = TestBed.get(LupuloService);
    expect(service).toBeTruthy();
  });
});
