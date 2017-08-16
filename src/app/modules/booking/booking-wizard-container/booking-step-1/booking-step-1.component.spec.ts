import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStep1Component } from './booking-step-1.component';

describe('BookingStep1Component', () => {
  let component: BookingStep1Component;
  let fixture: ComponentFixture<BookingStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
