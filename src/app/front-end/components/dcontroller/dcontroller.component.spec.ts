import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcontrollerComponent } from './dcontroller.component';

describe('DcontrollerComponent', () => {
  let component: DcontrollerComponent;
  let fixture: ComponentFixture<DcontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcontrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
