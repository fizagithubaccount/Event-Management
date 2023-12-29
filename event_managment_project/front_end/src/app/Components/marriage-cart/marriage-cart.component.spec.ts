import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCartComponent } from './marriage-cart.component';

describe('MarriageCartComponent', () => {
  let component: MarriageCartComponent;
  let fixture: ComponentFixture<MarriageCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarriageCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarriageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
