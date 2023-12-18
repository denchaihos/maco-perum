import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureMilestoneComponent } from './measure-milestone.component';

describe('MeasureMilestoneComponent', () => {
  let component: MeasureMilestoneComponent;
  let fixture: ComponentFixture<MeasureMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureMilestoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasureMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
