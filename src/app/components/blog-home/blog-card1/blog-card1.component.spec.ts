import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCard1Component } from './blog-card1.component';

describe('BlogCard1Component', () => {
  let component: BlogCard1Component;
  let fixture: ComponentFixture<BlogCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
