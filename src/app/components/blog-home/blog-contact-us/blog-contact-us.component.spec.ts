import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContactUsComponent } from './blog-contact-us.component';

describe('BlogContactUsComponent', () => {
  let component: BlogContactUsComponent;
  let fixture: ComponentFixture<BlogContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
