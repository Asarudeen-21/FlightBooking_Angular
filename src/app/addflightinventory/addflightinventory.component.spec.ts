import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflightinventoryComponent } from './addflightinventory.component';

describe('AddflightinventoryComponent', () => {
  let component: AddflightinventoryComponent;
  let fixture: ComponentFixture<AddflightinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflightinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflightinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
