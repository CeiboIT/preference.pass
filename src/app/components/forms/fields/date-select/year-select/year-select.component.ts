import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import * as moment from 'moment';
const _today = moment();
@Component({
  selector: 'app-year-select',
  template: `
    <div [formGroup]="parent">
        <md-select placeholder="Year" (change)="onChange($event)" class="input-full-width"
                   formControlName="year">
          <md-option *ngFor="let year of years" [value]="year">
            {{ year }}
          </md-option>
      </md-select>      
    </div>
  `
})
export class YearSelectComponent implements OnInit {
  @Output() yearSelected: EventEmitter<any> = new EventEmitter();
  @Input() years = [];
  @Input() parent;
  @Input() limitDate;
  constructor() { }
  ngOnInit() {
    if (this.limitDate) {
      console.log(this.limitDate);
      let _limit = moment(this.limitDate);
      let _years = [];
      _years.push(_today.year());

      if (_today.year() !== _limit.year()) {
        _years.push(_limit.year());
      }
      this.years = _years;
    }
  }

  /*get years() {
    let _years = [];
    const initialYear = 1900;
    for (let i = initialYear; i <= new Date().getFullYear(); i++) {
      _years.unshift(i);
    };
    return _years;
  }*/

  onChange($event) {
    this.yearSelected.emit($event.value);
  }
}
