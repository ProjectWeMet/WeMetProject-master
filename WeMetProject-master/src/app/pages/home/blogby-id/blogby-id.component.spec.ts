import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbyIdComponent } from './blogby-id.component';

describe('BlogbyIdComponent', () => {
  let component: BlogbyIdComponent;
  let fixture: ComponentFixture<BlogbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogbyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
