import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-select',
  template: `
    <md-select placeholder="Year">
      <md-option *ngFor="let year of years" [value]="year">
        {{ year }}
      </md-option>
    </md-select>
  `
})
export class YearSelectComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  get years() {
    let _years = [];
    const initialYear = 1900;
    for (let i = initialYear; i <= new Date().getFullYear(); i++) {
      _years.unshift(i);
    };
    return _years;
  }
}
