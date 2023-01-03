import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqContactUsComponent } from './faq-contact-us.component';

describe('FaqContactUsComponent', () => {
  let component: FaqContactUsComponent;
  let fixture: ComponentFixture<FaqContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
