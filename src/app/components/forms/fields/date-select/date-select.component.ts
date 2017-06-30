import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-date-select',
  template: `
    <div class="row">
      <div *ngFor="let p of format" class="col-md-4">
        <div>
          <app-day-select *ngIf="p == 'day'"
                          [monthObserver]="monthSelectionObserver"
                          [yearObserver]="yearSelectionObserver"
                          (daySelected)="onDaySelected($event)"
          >
          </app-day-select>
        </div>
        <div>
          <app-month-select *ngIf="p == 'month'" (monthSelected)="onMonthSelected($event)" ></app-month-select>
        </div>
        <div>
          <app-year-select *ngIf="p == 'year'" (yearSelected)="onYearSelected($event)" ></app-year-select>
        </div>
      </div>
    </div>
    
    
    <pre>
      
    </pre>
  `
})
export class DateSelectComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() parentKey: string;
  @Input() format: string[] = [
    'month', 'day', 'year'
  ];
  public monthSelectionObserver: EventEmitter<any> = new EventEmitter();
  public yearSelectionObserver: EventEmitter<any> = new EventEmitter();
  private day;
  private month;
  private year;
  private date;
  constructor() { }
  ngOnInit() { }
  onMonthSelected($event) {
    this.monthSelectionObserver.emit($event);
    this.month = $event;
    this.tryToSetDate();
  }
  onYearSelected($event) {
    this.yearSelectionObserver.emit($event);
    this.year = $event;
    this.tryToSetDate();
  }
  onDaySelected($event) {
    this.day = $event;
    this.tryToSetDate();
  }

  tryToSetDate() {
    if (this.month && this.year && this.day) {
      let _day;
      let _month;
      if (this.day <= 10) {
        _day = '0' + this.day;
      } else {
        _day = this.day;
      }
      if (this.month <= 10) {
        _month = '0' + this.month;
      } else {
        _month = this.month;
      }
      this.date = moment('' + this.year + _month + _day, 'YYYYMMDD').valueOf();
      console.log(this.date);
      this.parent.get(this.parentKey).setValue(this.date);
    }
  }


}
