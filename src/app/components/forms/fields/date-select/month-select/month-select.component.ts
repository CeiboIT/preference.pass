import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-month-select',
  template: `
    <md-select placeholder="Month" (change)="onChange($event)" class="input-full-width">
      <md-option *ngFor="let month of months" [value]="month">
        {{ displayMonth(month) }}
      </md-option>
    </md-select>
  `
})
export class MonthSelectComponent implements OnInit {
  @Output() monthSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  get months() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  onChange($event) {
    this.monthSelected.emit($event.value);
  }

  displayMonth(month) {
    const date = moment().month(month -1);
    const _month  = date.format('MMMM');
    return _month;
  }

}
