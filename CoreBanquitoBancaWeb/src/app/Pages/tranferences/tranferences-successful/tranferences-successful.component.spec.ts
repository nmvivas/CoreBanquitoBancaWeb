import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferencesSuccessfulComponent } from './tranferences-successful.component';

describe('TranferencesSuccessfulComponent', () => {
  let component: TranferencesSuccessfulComponent;
  let fixture: ComponentFixture<TranferencesSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranferencesSuccessfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranferencesSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
