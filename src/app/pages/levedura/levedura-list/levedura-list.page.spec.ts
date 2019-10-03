import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveduraListPage } from './levedura-list.page';

describe('LeveduraListPage', () => {
  let component: LeveduraListPage;
  let fixture: ComponentFixture<LeveduraListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveduraListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveduraListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
