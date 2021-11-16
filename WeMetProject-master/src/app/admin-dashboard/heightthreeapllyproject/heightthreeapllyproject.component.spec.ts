import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightthreeapllyprojectComponent } from './heightthreeapllyproject.component';

describe('HeightthreeapllyprojectComponent', () => {
  let component: HeightthreeapllyprojectComponent;
  let fixture: ComponentFixture<HeightthreeapllyprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightthreeapllyprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightthreeapllyprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
