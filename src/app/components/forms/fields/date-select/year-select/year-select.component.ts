import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-year-select',
  template: `
    <md-select placeholder="Year" (change)="onChange($event)" >
      <md-option *ngFor="let year of years" [value]="year">
        {{ year }}
      </md-option>
    </md-select>
  `
})
export class YearSelectComponent implements OnInit {
  @Output() yearSelected: EventEmitter<any> = new EventEmitter();
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

  onChange($event) {
    this.yearSelected.emit($event.value);
  }
}
