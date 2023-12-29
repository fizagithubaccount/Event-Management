import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeCermoneyComponent } from './saree-cermoney.component';

describe('SareeCermoneyComponent', () => {
  let component: SareeCermoneyComponent;
  let fixture: ComponentFixture<SareeCermoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SareeCermoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SareeCermoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
