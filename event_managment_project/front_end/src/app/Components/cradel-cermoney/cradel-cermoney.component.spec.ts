import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CradelCermoneyComponent } from './cradel-cermoney.component';

describe('CradelCermoneyComponent', () => {
  let component: CradelCermoneyComponent;
  let fixture: ComponentFixture<CradelCermoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CradelCermoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CradelCermoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
