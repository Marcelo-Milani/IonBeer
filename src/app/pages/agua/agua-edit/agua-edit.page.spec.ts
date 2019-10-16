import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaEditPage } from './agua-edit.page';

describe('AguaEditPage', () => {
  let component: AguaEditPage;
  let fixture: ComponentFixture<AguaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguaEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
