import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { ActivitiesService } from '../../../services/activities/activities.service';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  providers: [ActivitiesService]
})

export class LandingContainerComponent implements OnInit {

  activities : Activity[];

  constructor(
    private activitiesService : ActivitiesService
  ) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() : void {
    this.activitiesService.getAllActivities().then(activities => this.activities = activities );
  }

}
