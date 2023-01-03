import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordion2Component } from './faq-accordion2.component';

describe('FaqAccordion2Component', () => {
  let component: FaqAccordion2Component;
  let fixture: ComponentFixture<FaqAccordion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqAccordion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAccordion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
