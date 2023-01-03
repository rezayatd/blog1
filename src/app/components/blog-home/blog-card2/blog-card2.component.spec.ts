import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCard2Component } from './blog-card2.component';

describe('BlogCard2Component', () => {
  let component: BlogCard2Component;
  let fixture: ComponentFixture<BlogCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
