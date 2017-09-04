import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { compress, resize } from '../../../constants/filestack';

@Component({
  selector: 'app-activity-card',
  template: `    
      <div class="activity-card" (click)="gotoDetail()">
        <div class="activity-card-image m-0" [ngStyle]="{'background-image': 'url(' + activityPhoto + ')'}"></div>
        <div class="mt-1 activity-title d-flex justify-content-between">
            <div class="w-75">
              {{ activity.name }}
            </div>
            <div class="w-25 text-right">
              <app-activity-price [rates]="activity.rates"></app-activity-price>
            </div>
        </div>
        <div class="mt-1 text-center">
          <div class="saving">
            <app-activity-saving [rates]="activity.rates"></app-activity-saving>
          </div>
        </div>
        <div class="activity-content mt-1">
          {{ activity.headline }}
        </div>
      </div>
    `,
  styles: [
    '.activity-card {width:100%;}',
    '.activity-card-image {height:150px; background-repeat: no-repeat !important; background-size: cover !important;}',
    '.activity-card:hover {cursor:pointer}',
    '.activity-title {font-size:16px;}',
    '.saving {font-size: 1.35em; color: #c63f3f;}',
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
