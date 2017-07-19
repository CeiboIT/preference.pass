import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
      <h2 class="col-12 text-center">
        Cuando quieres ir a {{ activity.name }} ?
      </h2>
      <div *ngFor="let day of availableDays"  class="col-md-2 col-xs-6 mt-3 mr-3">
        <app-booking-date-element (onDaySelected)="onDaySelected($event)"  [day]="day"></app-booking-date-element>
      </div>
    </div>
  `
})
export class BookingDateSelectorFormComponent implements OnInit {
  @Input() validUntil = moment().add(5, 'day');
  @Input() parent: FormGroup;
  @Input() activity = { name: 'xcaret'};
  public availableDays;
  public daySelected: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.availableDays = this.getAvailableDays();
    console.log(this.availableDays);
  }

  onDaySelected(event) {
    console.log(
      event.valueOf());
      this.parent.get('executionDate').setValue(event.valueOf());
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
