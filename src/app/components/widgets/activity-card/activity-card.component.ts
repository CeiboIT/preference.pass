import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-card',
  template: `    
      <div class="mt-3 activity-card" (click)="gotoDetail()">
        <div class="activity-card-image m-0" [ngStyle]="{'background': 'url(' + activityPhoto + ')'}"></div>
        <div class="mt-3 mb-3 activity-title">
          <app-activity-price [rates]="activity.rates"></app-activity-price>
          {{ activity.name}}
        </div>
        <div class="activity-content">
          {{ activity.shortDescription }}
        </div>
      </div>
    `,
  styles: [
    '.activity-card {width:100%;}',
    '.activity-card-image {height:300px; background-repeat: no-repeat !important; background-size: cover !important;}',
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
      return this.activity.mainPhoto.url || '';
  }

}
