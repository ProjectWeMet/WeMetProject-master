import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentWeMetComponent } from './department-we-met.component';

describe('DepartmentWeMetComponent', () => {
  let component: DepartmentWeMetComponent;
  let fixture: ComponentFixture<DepartmentWeMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentWeMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentWeMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
