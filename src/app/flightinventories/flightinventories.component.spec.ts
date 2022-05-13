import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightinventoriesComponent } from './flightinventories.component';

describe('FlightinventoriesComponent', () => {
  let component: FlightinventoriesComponent;
  let fixture: ComponentFixture<FlightinventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightinventoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightinventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
