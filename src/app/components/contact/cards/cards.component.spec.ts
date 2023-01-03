import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: ContactCardsComponent;
  let fixture: ComponentFixture<ContactCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
