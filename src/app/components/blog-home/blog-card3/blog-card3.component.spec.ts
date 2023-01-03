import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCard3Component } from './blog-card3.component';

describe('BlogCard3Component', () => {
  let component: BlogCard3Component;
  let fixture: ComponentFixture<BlogCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
