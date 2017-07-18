import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-list',
  template: `
      
    <div class="scrolling-wrapper-flexbox hidden-md-up">
      <div class="activities-landing-container col-11" *ngFor="let activity of activities">
        <app-activity-card [activity]="activity"></app-activity-card>
      </div>
    </div>
    <div class="scrolling-wrapper-flexbox hidden-md-down">
      <div class="activities-landing-container col-3" *ngFor="let activity of activities">
        <app-activity-card [activity]="activity"></app-activity-card>
      </div>
    </div>
  `,
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit {
  @Input() activities;
  constructor() { }
  ngOnInit() {
  }
}

