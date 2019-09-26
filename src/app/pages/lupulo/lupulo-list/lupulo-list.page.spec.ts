import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LupuloListPage } from './lupulo-list.page';

describe('LupuloListPage', () => {
  let component: LupuloListPage;
  let fixture: ComponentFixture<LupuloListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupuloListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LupuloListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
