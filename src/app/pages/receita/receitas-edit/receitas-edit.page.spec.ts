import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasEditPage } from './receitas-edit.page';

describe('ReceitasEditPage', () => {
  let component: ReceitasEditPage;
  let fixture: ComponentFixture<ReceitasEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
