import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdiscountsComponent } from './getdiscounts.component';

describe('GetdiscountsComponent', () => {
  let component: GetdiscountsComponent;
  let fixture: ComponentFixture<GetdiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
