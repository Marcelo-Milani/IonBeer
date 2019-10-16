import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalteEditPage } from './malte-edit.page';

describe('MalteEditPage', () => {
  let component: MalteEditPage;
  let fixture: ComponentFixture<MalteEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalteEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
