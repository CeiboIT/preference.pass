import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-year-select',
  template: `
    <div [formGroup]="parent">
        <md-select placeholder="Year" (change)="onChange($event)" class="input-full-width"
                   formControlName="year">
          <md-option *ngFor="let Year of years" [value]="Year">
            {{ Year }}
          </md-option>
      </md-select>      
    </div>
  `
})
export class YearSelectComponent implements OnInit {
  @Output() yearSelected: EventEmitter<any> = new EventEmitter();
  @Input() years = [];
  @Input() parent;
  constructor() { }
  ngOnInit() {
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
