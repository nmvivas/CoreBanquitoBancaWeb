import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceValueComponent } from './service-value.component';

describe('ServiceValueComponent', () => {
  let component: ServiceValueComponent;
  let fixture: ComponentFixture<ServiceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
