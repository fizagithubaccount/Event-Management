import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryEventComponent } from './anniversary-event.component';

describe('AnniversaryEventComponent', () => {
  let component: AnniversaryEventComponent;
  let fixture: ComponentFixture<AnniversaryEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnniversaryEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnniversaryEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
