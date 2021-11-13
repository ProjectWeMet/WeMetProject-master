import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsprojectsComponent } from './cardsprojects.component';

describe('CardsprojectsComponent', () => {
  let component: CardsprojectsComponent;
  let fixture: ComponentFixture<CardsprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
