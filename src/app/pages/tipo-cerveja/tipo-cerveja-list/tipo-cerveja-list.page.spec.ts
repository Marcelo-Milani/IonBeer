import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCervejaListPage } from './tipo-cerveja-list.page';

describe('TipoCervejaListPage', () => {
  let component: TipoCervejaListPage;
  let fixture: ComponentFixture<TipoCervejaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCervejaListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCervejaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
