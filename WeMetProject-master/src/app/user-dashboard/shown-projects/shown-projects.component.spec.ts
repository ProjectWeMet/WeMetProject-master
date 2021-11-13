import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownProjectsComponent } from './shown-projects.component';

describe('ShownProjectsComponent', () => {
  let component: ShownProjectsComponent;
  let fixture: ComponentFixture<ShownProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
