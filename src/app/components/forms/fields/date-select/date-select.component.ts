import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-date-select',
  template: `
    <div class="row">
      <div *ngFor="let p of format" class="col-md-4 py-3 py-sm-0">
        <div>
          <app-day-select *ngIf="p == 'day'"
                          [monthObserver]="monthSelectionObserver"
                          [yearObserver]="yearSelectionObserver"
                          (daySelected)="onDaySelected($event)"
                          [parent]="dateGroup"
                          [limitDate]="limitDate"
          >
          </app-day-select>
        </div>
        <div>
          <app-month-select *ngIf="p == 'month'" (monthSelected)="onMonthSelected($event)"
                            [parent]="dateGroup"
                            [limitDate]="limitDate"
          ></app-month-select>
        </div>
        <div>
          <app-year-select *ngIf="p == 'year'" [years]="years" (yearSelected)="onYearSelected($event)"
                           [parent]="dateGroup"
                           [limitDate]="limitDate"
          >
          </app-year-select>
        </div>
      </div>
    </div>
  `
})
export class DateSelectComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() parentKey: string;
  @Input() years;
  @Input() limitDate;
  @Input() startDate;
  @Input() initialDate;
  @Input() format: string[] = [
    'month', 'day', 'year'
  ];

  public dateGroup: FormGroup;
  public monthSelectionObserver: EventEmitter<any> = new EventEmitter();
  public yearSelectionObserver: EventEmitter<any> = new EventEmitter();
  private day;
  private month;
  private year;
  private date;
  constructor(private fb: FormBuilder) {
    this.dateGroup = this.fb.group({
      day: [''],
      month: [''],
      year: ['']
    });
  }
  ngOnInit() {
    if (this.initialDate) {
     const _init =  moment(this.initialDate);
      this.dateGroup.get('year').setValue(_init.year());
      this.dateGroup.get('month').setValue(_init.month());
      this.dateGroup.get('day').setValue(_init.date());
      this.tryToSetDate();
    }
  }

  generateDates() {

  }
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

    const dateVal = this.dateGroup.value;

    if (dateVal.month && dateVal.year && dateVal.day) {
      let _day;
      let _month;
      if (dateVal.day <= 10) {
        _day = '0' + dateVal.day;
      } else {
        _day = dateVal.day;
      }
      if (dateVal.month <= 10) {
        _month = '0' + dateVal.month;
      } else {
        _month = dateVal.month;
      }
      this.date = moment('' + dateVal.year + _month + _day, 'YYYYMMDD').toISOString();
      this.parent.get(this.parentKey).setValue(this.date);
    }
  }


}
