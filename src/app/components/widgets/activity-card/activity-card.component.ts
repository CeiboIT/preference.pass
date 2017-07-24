import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {compress, resize} from '../../../constants/filestack';

@Component({
  selector: 'app-activity-card',
  template: `    
      <div class="mt-3 activity-card" (click)="gotoDetail()">
        <div class="activity-card-image m-0" [ngStyle]="{'background': 'url(' + activityPhoto + ')'}"></div>
        <div class="my-3 activity-title d-flex w-100 justify-content-between align-items-center">
            <div>
              {{ activity.name}}
            </div>
            <div>
              <app-activity-price [rates]="activity.rates"></app-activity-price>
            </div>
        </div>
        <div class="activity-content">
          {{ activity.headline }}
        </div>
      </div>
    `,
  styles: [
    '.activity-card {width:100%;}',
    '.activity-card-image {height:150px; background-repeat: no-repeat !important; background-size: cover !important;}',
    '.activity-card:hover {cursor:pointer}',
    '.activity-title {font-size:16px;}',
    '.activity-content {font-size:14px;}'
  ]
})
export class ActivityCardComponent {
  @Input() activity;
  constructor(
    private router: Router
  ){}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.activity.id]);
  }

  get activityPhoto(){
      return resize(this.activity.mainPhoto.url, 500, 500);
  }

}
