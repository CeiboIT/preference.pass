import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDateElementComponent } from './booking-date-element.component';

describe('BookingDateElementComponent', () => {
  let component: BookingDateElementComponent;
  let fixture: ComponentFixture<BookingDateElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDateElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
