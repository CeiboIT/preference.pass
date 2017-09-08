import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingUserLocationFormComponent } from './booking-user-location-form.component';

describe('BookingUserLocationFormComponent', () => {
  let component: BookingUserLocationFormComponent;
  let fixture: ComponentFixture<BookingUserLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingUserLocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingUserLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
