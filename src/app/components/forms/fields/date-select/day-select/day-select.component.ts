import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as moment from 'moment';
function getDaysInMonth(year, month) {
  let daysInMonth;
  if (month < 10) {
    const dateString = year  + '-0' + month;
    daysInMonth = moment(dateString, 'YYYY-MM').daysInMonth();
  }
  if (month >= 10) {
    const dateString = year  + '-' + month;
    daysInMonth = moment(dateString, 'YYYY-MM').daysInMonth();
  }
  return daysInMonth;
}

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
  @Input() yearObserver: EventEmitter<any>;
  @Output() daySelected: EventEmitter<any> = new EventEmitter();
  public days = [];
  private month;
  private year;
  constructor() { }
  ngOnInit() {
    // moment("2012-02", "YYYY-MM").daysInMonth()
    this.monthObserver.subscribe((value) => {
      this.month = value;
      const _year = this.year || new Date().getFullYear();
      const daysInMonth = getDaysInMonth(_year, this.month);
      this.generateDaysInMonth(daysInMonth);
    });

    this.yearObserver.subscribe((value) => {
      this.year = value;
      const _month = this.month || new Date().getMonth();
      const daysInMonth = getDaysInMonth(this.year, _month);
      this.generateDaysInMonth(daysInMonth);
    });

  }
  onChange($event) {
    this.daySelected.emit($event.value);
  }

  generateDaysInMonth(daysInMonth) {
    let _days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      _days.push(i);
    }
    this.days = _days;
  }

}
