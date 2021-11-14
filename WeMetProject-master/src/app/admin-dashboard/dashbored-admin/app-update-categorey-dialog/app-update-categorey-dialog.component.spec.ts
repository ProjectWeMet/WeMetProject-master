import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateCategoreyDialogComponent } from './app-update-categorey-dialog.component';

describe('AppUpdateCategoreyDialogComponent', () => {
  let component: AppUpdateCategoreyDialogComponent;
  let fixture: ComponentFixture<AppUpdateCategoreyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdateCategoreyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUpdateCategoreyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
