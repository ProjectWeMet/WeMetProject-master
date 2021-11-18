import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoreyComponent } from './card-categorey.component';

describe('CardCategoreyComponent', () => {
  let component: CardCategoreyComponent;
  let fixture: ComponentFixture<CardCategoreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCategoreyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCategoreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
