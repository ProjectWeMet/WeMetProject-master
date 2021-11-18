import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCategoreyDialogComponent } from './edite-categorey-dialog.component';

describe('EditeCategoreyDialogComponent', () => {
  let component: EditeCategoreyDialogComponent;
  let fixture: ComponentFixture<EditeCategoreyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeCategoreyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCategoreyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
