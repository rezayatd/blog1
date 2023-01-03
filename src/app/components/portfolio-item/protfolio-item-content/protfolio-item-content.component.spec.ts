import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioItemContentComponent } from './protfolio-item-content.component';

describe('ProtfolioItemContentComponent', () => {
  let component: ProtfolioItemContentComponent;
  let fixture: ComponentFixture<ProtfolioItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfolioItemContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
