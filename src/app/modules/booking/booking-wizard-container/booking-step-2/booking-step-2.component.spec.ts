import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStep2Component } from './booking-step-2.component';

describe('BookingStep2Component', () => {
  let component: BookingStep2Component;
  let fixture: ComponentFixture<BookingStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
