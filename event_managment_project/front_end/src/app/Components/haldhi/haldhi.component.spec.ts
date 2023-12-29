import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldhiComponent } from './haldhi.component';

describe('HaldhiComponent', () => {
  let component: HaldhiComponent;
  let fixture: ComponentFixture<HaldhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HaldhiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaldhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
