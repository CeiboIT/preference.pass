import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';
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
    <div [formGroup]="parent">
      <md-select placeholder="Days" (change)="onChange($event)" class="input-full-width"
        formControlName="day"
      >
        <md-option *ngFor="let day of days" [value]="day">
          {{ day }}
        </md-option>
      </md-select>      
    </div>

  `
})
export class DaySelectComponent implements OnInit {
  @Input() monthObserver: EventEmitter<any>;
  @Input() yearObserver: EventEmitter<any>;
  @Output() daySelected: EventEmitter<any> = new EventEmitter();
  @Input() parent: FormGroup;
  @Input() limitDate;
  @Input() startDate;
  public days = [];
  private month;
  private year;
  public start
  public limit
  constructor() { }
  ngOnInit() {
    this.parent.get('month').valueChanges.subscribe((value) => {
      this.month = value;
      this.start = moment(this.startDate);
      this.limit = moment(this.limitDate);
      const _year = this.year || new Date().getFullYear();
      const daysInMonth = getDaysInMonth(_year, this.month);
      if (this.startDate && this.month === this.start.month()) {
        this.generateDaysInMonth(daysInMonth, this.startDate);
      } else if (this.limitDate && this.month === this.limit.month()) {
        this.generateDaysInMonth(daysInMonth, null, this.limitDate);
      } else {
        this.generateDaysInMonth(daysInMonth);
      }
    });

    this.parent.get('year').valueChanges.subscribe((value) => {
      this.year = value;
      this.start = moment(this.startDate);
      this.limit = moment(this.limitDate);
      const _month = this.month || new Date().getMonth();
      const daysInMonth = getDaysInMonth(this.year, _month);
      if (this.startDate && this.month === this.start.month()) {
        this.generateDaysInMonth(daysInMonth, this.startDate);
      } else if (this.limitDate && this.month === this.limit.month()) {
        this.generateDaysInMonth(daysInMonth, null, this.limitDate);
      } else {
        this.generateDaysInMonth(daysInMonth);
      }
    });

    if (this.parent.get('month').value && this.parent.get('year').value) {
      this.start = moment(this.startDate);
      this.limit = moment(this.limitDate);
      this.month = this.parent.get('month').value;
      this.year = this.parent.get('year').value;
      const daysInMonth = getDaysInMonth(this.year, this.month);
      if (this.startDate && this.month === this.start.month()) {
        this.generateDaysInMonth(daysInMonth, this.startDate);
      } else {
        this.generateDaysInMonth(daysInMonth);
      }
    }

  }
  onChange($event) {
    this.daySelected.emit($event.value);
  }

  generateDaysInMonth(daysInMonth, startDate?, limitDate?) {
    let _days = [];
    if (startDate && limitDate) {
      for (let i = this.start.date() ; i <= this.limit.date(); i++) {
        _days.push(i);
      }
    }

    if (startDate && !limitDate) {
      for (let i = this.start.date(); i <= daysInMonth; i++) {
        _days.push(i);
      }
    }

    if (!startDate && limitDate) {
      for (let i = 1; i <= this.limit.date() ; i++) {
        _days.push(i);
      }
    }

    if (!startDate && !limitDate) {;
      for (let i = 1; i <= daysInMonth ; i++) {
        _days.push(i);
      }
    }

    this.days = _days;
  }

}
