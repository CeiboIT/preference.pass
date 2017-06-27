import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-select',
  template: `    
    
    <div fxFlex *ngFor="let p of format">
      <div fxFlex="33%">
        <app-day-select *ngIf="p == 'day'"></app-day-select>
      </div>
      <div fxFlex="33%">
        <app-month-select *ngIf="p == 'month'"></app-month-select>
      </div>
      <div fxFlex="33%">
        <app-year-select *ngIf="p == 'year'"></app-year-select>
      </div>
    </div>
  `
})
export class DateSelectComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() parentKey: string;
  @Input() format: string[] = [
    'month', 'day', 'year'
  ]
  constructor() { }

  ngOnInit() {
  }

}
