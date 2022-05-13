import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableflightsComponent } from './availableflights.component';

describe('AvailableflightsComponent', () => {
  let component: AvailableflightsComponent;
  let fixture: ComponentFixture<AvailableflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
