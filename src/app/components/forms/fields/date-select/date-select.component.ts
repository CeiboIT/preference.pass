import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-select',
  template: `    
    
    <div fxFlex *ngFor="p in format">
      <app-day-select *ngIf="p == 'day'"></app-day-select>
      <app-month-select *ngIf="p == 'month'"></app-month-select>
      <app-year-select *ngIf="p == 'year'"></app-year-select>
    </div>
    
    
  `
})
export class DateSelectComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() parentKey: string;
  @Input() format: string[] = [
    'day', 'month', 'year'
  ]
  constructor() { }

  ngOnInit() {
  }

}
