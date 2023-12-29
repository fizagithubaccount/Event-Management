import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFestComponent } from './organization-fest.component';

describe('OrganizationFestComponent', () => {
  let component: OrganizationFestComponent;
  let fixture: ComponentFixture<OrganizationFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationFestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
