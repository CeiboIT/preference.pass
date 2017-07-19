import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div>
      <app-booking-date-selector-form></app-booking-date-selector-form>
    </div>
  `
})
export class BookingWizardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
