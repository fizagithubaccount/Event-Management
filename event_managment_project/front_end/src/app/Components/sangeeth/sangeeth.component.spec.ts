import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangeethComponent } from './sangeeth.component';

describe('SangeethComponent', () => {
  let component: SangeethComponent;
  let fixture: ComponentFixture<SangeethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SangeethComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SangeethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
