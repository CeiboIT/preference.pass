import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-month-select',
  template: `
    <div [formGroup]="parent">
      <md-select placeholder="Month" (change)="onChange($event)" class="input-full-width"
                 formControlName="month"
      >
        <md-option *ngFor="let month of months" [value]="month">
          {{ displayMonth(month) }}
        </md-option>
      </md-select>
    </div>
  `
})
export class MonthSelectComponent implements OnInit {
  @Output() monthSelected: EventEmitter<any> = new EventEmitter();
  @Input() month;
  @Input() parent: FormGroup;
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
    return moment().month(month - 1).format('MMMM');;
  }
}
