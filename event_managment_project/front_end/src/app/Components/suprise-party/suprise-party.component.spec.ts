import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprisePartyComponent } from './suprise-party.component';

describe('SuprisePartyComponent', () => {
  let component: SuprisePartyComponent;
  let fixture: ComponentFixture<SuprisePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuprisePartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuprisePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
