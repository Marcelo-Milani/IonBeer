import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa2Page } from './etapa2.page';

describe('Etapa2Page', () => {
  let component: Etapa2Page;
  let fixture: ComponentFixture<Etapa2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etapa2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etapa2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
