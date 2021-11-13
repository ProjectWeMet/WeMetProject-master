import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamByIdComponent } from './our-team-by-id.component';

describe('OurTeamByIdComponent', () => {
  let component: OurTeamByIdComponent;
  let fixture: ComponentFixture<OurTeamByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
