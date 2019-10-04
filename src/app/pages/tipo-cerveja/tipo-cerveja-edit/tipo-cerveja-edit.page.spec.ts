import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCervejaEditPage } from './tipo-cerveja-edit.page';

describe('TipoCervejaEditPage', () => {
  let component: TipoCervejaEditPage;
  let fixture: ComponentFixture<TipoCervejaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCervejaEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCervejaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
