import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-list',
  template: `
    <div class="activities-landing-container col-md-4 col-sm-6 col-xs-12" *ngFor="let activity of activities">
      <app-activity-card [activity]="activity"></app-activity-card>
    </div>
  `
})
export class ActivityListComponent implements OnInit {
  @Input() activities;
  constructor() { }

  ngOnInit() {
  }

}
