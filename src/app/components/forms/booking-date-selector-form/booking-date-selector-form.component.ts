import { Component, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';

function generateAvailableDays(diff) {
  let _days = [];
  const today = moment();
  for ( let i = 0; i <= diff; i++ ) {
    let day = today.add(i, 'days');
    _days.push(day);
  }
  return _days;
}


@Component({
  selector: 'app-booking-date-selector-form',
  template: `
    <div>
      
      
      
    </div>
  `
})
export class BookingDateSelectorFormComponent implements OnInit {
  @Input() validUntil = moment().add(5, 'day');
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {
  }
  get availableDays(){
    let _availableDays = [];
    const today = moment();
    const diff = today.diff(this.validUntil, 'days');
    if (diff >= 0) {
      _availableDays = generateAvailableDays(diff);
    }
    return _availableDays;
  }
}
