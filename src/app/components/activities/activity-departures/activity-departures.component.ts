import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-departures',
  template: `
    <div>
      <div *ngFor="let departure of departures">
        {{ departure.times }}
      </div>
    </div>
  `
})
export class ActivityDeparturesComponent implements OnInit {
  @Input() departures;
  constructor() { }

  ngOnInit() {
  }

}
