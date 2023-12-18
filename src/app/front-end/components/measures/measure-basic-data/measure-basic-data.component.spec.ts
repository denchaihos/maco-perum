import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureBasicDataComponent } from './measure-basic-data.component';

describe('MeasureBasicDataComponent', () => {
  let component: MeasureBasicDataComponent;
  let fixture: ComponentFixture<MeasureBasicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureBasicDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasureBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
