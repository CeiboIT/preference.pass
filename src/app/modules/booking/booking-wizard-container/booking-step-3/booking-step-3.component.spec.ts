import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStep3Component } from './booking-step-3.component';

describe('BookingStep3Component', () => {
  let component: BookingStep3Component;
  let fixture: ComponentFixture<BookingStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
