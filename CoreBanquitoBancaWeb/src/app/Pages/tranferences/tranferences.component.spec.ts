import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferencesComponent } from './tranferences.component';

describe('TranferencesComponent', () => {
  let component: TranferencesComponent;
  let fixture: ComponentFixture<TranferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
