import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDateSelectorFormComponent } from './booking-date-selector-form.component';

describe('BookingDateSelectorFormComponent', () => {
  let component: BookingDateSelectorFormComponent;
  let fixture: ComponentFixture<BookingDateSelectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDateSelectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDateSelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
