import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoreyByIdComponent } from './show-categorey-by-id.component';

describe('ShowCategoreyByIdComponent', () => {
  let component: ShowCategoreyByIdComponent;
  let fixture: ComponentFixture<ShowCategoreyByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoreyByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoreyByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
