import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-date-select',
  template: `    
    <div fxFlex *ngFor="let p of format">
      <div fxFlex="33%">
        <app-day-select *ngIf="p == 'day'" [monthObserver]="monthSelectionObserver"></app-day-select>
      </div>
      <div fxFlex="33%">
        <app-month-select *ngIf="p == 'month'" (monthSelected)="onMonthSelected($event)"></app-month-select>
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
  ];
  public monthSelectionObserver: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onMonthSelected($event) {
    this.monthSelectionObserver.emit($event);
  }


}
