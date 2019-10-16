import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveduraEditPage } from './levedura-edit.page';

describe('LeveduraEditPage', () => {
  let component: LeveduraEditPage;
  let fixture: ComponentFixture<LeveduraEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveduraEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveduraEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
