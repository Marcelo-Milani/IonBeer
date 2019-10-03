import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LupuloEditPage } from './lupulo-edit.page';

describe('LupuloEditPage', () => {
  let component: LupuloEditPage;
  let fixture: ComponentFixture<LupuloEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupuloEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LupuloEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
