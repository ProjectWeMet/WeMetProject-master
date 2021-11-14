import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoregAllComponent } from './categoreg-all.component';

describe('CategoregAllComponent', () => {
  let component: CategoregAllComponent;
  let fixture: ComponentFixture<CategoregAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoregAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoregAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
