import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdCardComponent } from './bd-card.component';

describe('BdCardComponent', () => {
  let component: BdCardComponent;
  let fixture: ComponentFixture<BdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
