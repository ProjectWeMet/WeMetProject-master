import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategoreyDialogComponent } from './createcategorey-dialog.component';

describe('CreatecategoreyDialogComponent', () => {
  let component: CreatecategoreyDialogComponent;
  let fixture: ComponentFixture<CreatecategoreyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecategoreyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecategoreyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
