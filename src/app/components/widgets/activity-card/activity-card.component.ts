import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';


/*

 <md-card class="activity-card mb-3">
 <md-card-header>
 <md-card-title>{{activity.name}}</md-card-title>
 <md-card-subtitle>{{activity.area.formatedAddress}}</md-card-subtitle>
 </md-card-header>
 <img md-card-image src="{{activity.mainPhoto.url}}" layout-fill >
 <md-card-content>
 <p> {{activity.shortDescription}} </p>
 <p> $ {{activity.price}} </p>
 </md-card-content>
 <md-card-actions align='center' layout="row">
 <button md-button (click)="gotoDetail()">Ver detalle</button>
 <button md-button>Reservar</button>
 </md-card-actions>
 </md-card>
 */

@Component({
  selector: 'app-activity-card',
  template: `    
      <md-card class="mt-3 activity-card" (click)="gotoDetail()">
        <img [src]="activityPhoto" md-card-image/>
        <md-card-title>
          <app-activity-price [rates]="activity.rates"></app-activity-price>
          {{ activity.name}}
        </md-card-title>
        <md-card-content>
          {{ activity.shortDescription }}
        </md-card-content>
      </md-card>
    `,

  styles: [
    '.activity-card {width:100%;}', '.activity-card-image {width:100%}', '.activity-card:hover {cursor:pointer}'
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
