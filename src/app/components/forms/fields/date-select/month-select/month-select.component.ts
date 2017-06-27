import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-select',
  template: `
    <md-select placeholder="Month">
      <md-option *ngFor="let month of months" [value]="month">
        {{ month }}
      </md-option>
    </md-select>
  `
})
export class MonthSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  get months() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

}
