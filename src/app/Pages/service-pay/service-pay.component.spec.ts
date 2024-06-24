import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePayComponent } from './service-pay.component';

describe('ServicePayComponent', () => {
  let component: ServicePayComponent;
  let fixture: ComponentFixture<ServicePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
