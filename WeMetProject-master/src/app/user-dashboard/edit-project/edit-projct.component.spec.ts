import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjctComponent } from './edit-projct.component';

describe('EditProjctComponent', () => {
  let component: EditProjctComponent;
  let fixture: ComponentFixture<EditProjctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
