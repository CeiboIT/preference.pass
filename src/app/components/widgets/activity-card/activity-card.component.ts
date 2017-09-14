import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { compress, resize } from '../../../constants/filestack';

@Component({
  selector: 'app-activity-card',
  template: `    
    <div class="card" (click)="gotoDetail()">
      <div class="card-image">
          <div class="child">
            <div class="content-img">
              <div class="img" [ngStyle]="{'background-image': 'url(' + activityPhoto + ')'}"></div>
            </div>
          </div>
      </div>
      <div class="card-block">
        <h4 class="card-title">
          {{ activity.name }}
        </h4>
        <div class="card-description">
          {{ activity.headline }}
        </div>
        <div class="price">
          <app-ctivity-strike-price [rates]="activity.rates"></app-ctivity-strike-price>
          <span class="text-danger">
            <app-activity-price [rates]="activity.rates"></app-activity-price>
          </span>
        </div>
      </div>
    </div>
    `,
    styleUrls: ['./activity-card.component.scss'],
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
