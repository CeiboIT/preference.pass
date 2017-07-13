import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-title',
  template: `
    <div>
      <app-activity-price [rates]="activity.rates"></app-activity-price> | 
      <strong>{{activity.name}}</strong>
    </div>
  `
})
export class ActivityTitleComponent implements OnInit {
  @Input() activity;
  constructor() { }

  ngOnInit() {
  }

}
