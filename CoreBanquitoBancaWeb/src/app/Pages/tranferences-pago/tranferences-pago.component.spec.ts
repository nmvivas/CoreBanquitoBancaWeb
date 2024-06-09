import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferencesPagoComponent } from './tranferences-pago.component';

describe('TranferencesPagoComponent', () => {
  let component: TranferencesPagoComponent;
  let fixture: ComponentFixture<TranferencesPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranferencesPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranferencesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
