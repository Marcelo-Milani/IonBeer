import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMaltePage } from './cadastrar-malte.page';

describe('CadastrarMaltePage', () => {
  let component: CadastrarMaltePage;
  let fixture: ComponentFixture<CadastrarMaltePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMaltePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMaltePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
