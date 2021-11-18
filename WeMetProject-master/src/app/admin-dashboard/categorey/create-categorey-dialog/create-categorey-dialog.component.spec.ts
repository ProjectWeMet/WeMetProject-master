import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoreyDialogComponent } from './create-categorey-dialog.component';

describe('CreateCategoreyDialogComponent', () => {
  let component: CreateCategoreyDialogComponent;
  let fixture: ComponentFixture<CreateCategoreyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoreyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoreyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
