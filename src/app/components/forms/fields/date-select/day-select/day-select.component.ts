import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-day-select',
  template: `
    <md-select placeholder="Days" (change)="onChange($event)">
      <md-option *ngFor="let day of days" [value]="day">
        {{ day }}
      </md-option>
    </md-select>
  `
})
export class DaySelectComponent implements OnInit {
  @Input() monthObserver: EventEmitter<any>;
  public days = [];
  constructor() { }
  ngOnInit() {
    // moment("2012-02", "YYYY-MM").daysInMonth()
    let daysInMonth;
    this.monthObserver.subscribe((value) => {
      if (value < 10) {
        const dateString = '2012-0' + value;
        daysInMonth = moment(dateString, 'YYYY-MM').daysInMonth();
      }
      if (value >= 10) {
        const dateString = '2012-' + value;
        daysInMonth = moment(dateString, 'YYYY-MM').daysInMonth();
      }
      let _days = [];
      for (let i = 1; i <= daysInMonth; i++) {
       _days.push(i);
      }
      this.days = _days;
    });

  }

}
