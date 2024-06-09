import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSuccessfulComponent } from './service-successful.component';

describe('ServiceSuccessfulComponent', () => {
  let component: ServiceSuccessfulComponent;
  let fixture: ComponentFixture<ServiceSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSuccessfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
