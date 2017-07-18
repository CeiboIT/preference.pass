import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingWizardContainerComponent } from './booking-wizard-container.component';

describe('BookingWizardContainerComponent', () => {
  let component: BookingWizardContainerComponent;
  let fixture: ComponentFixture<BookingWizardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingWizardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
