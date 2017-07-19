import { Component, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';

function generateAvailableDays(diff) {
  let _days = [];
  const today = moment();
  _days.push(today);
  for ( let i = 1; i <= diff; i++ ) {
    console.log(i);
    let day = today.clone();
    _days.push(day.add(i, 'days'));
  }
  return _days;
}


@Component({
  selector: 'app-booking-date-selector-form',
  template: `
    <div class="row">
      <div *ngFor="let day of availableDays"  class="col-md-2 col-sm-6 mt-3">
        <app-booking-date-element  [day]="day"></app-booking-date-element>
      </div>
    </div>
  `
})
export class BookingDateSelectorFormComponent implements OnInit {
  @Input() validUntil = moment().add(5, 'day');
  @Input() parent: FormGroup;
  public availableDays;
  constructor() { }
  ngOnInit() {
    this.availableDays = this.getAvailableDays();
    console.log(this.availableDays);
  }

  getAvailableDays() {
    let _availableDays = [];
    const today = moment();
    const diff = this.validUntil.diff(today, 'days');
    if (diff >= 0) {
      _availableDays = generateAvailableDays(diff);
    }
    return _availableDays;
  }
}
