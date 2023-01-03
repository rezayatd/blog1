import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordion1Component } from './faq-accordion1.component';

describe('FaqAccordion1Component', () => {
  let component: FaqAccordion1Component;
  let fixture: ComponentFixture<FaqAccordion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqAccordion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAccordion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
