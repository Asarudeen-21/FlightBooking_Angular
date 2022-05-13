import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingflightsComponent } from './bookingflights.component';

describe('BookingflightsComponent', () => {
  let component: BookingflightsComponent;
  let fixture: ComponentFixture<BookingflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
