import { Component, Input } from '@angular/core';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-card',
  template: `
    <md-card class="activity-card mb-3">
      <md-card-header>
        <md-card-title>{{activity.name}}</md-card-title>
        <md-card-subtitle>{{activity.location}}</md-card-subtitle>
      </md-card-header>
      <img md-card-image src="https://goo.gl/akgGCC" layout-fill >
      <md-card-content>
        <p> {{activity.description}} </p>
        <p> $ {{activity.price}} </p>
      </md-card-content>
      <md-card-actions align='center' layout="row">
        <button md-button>Ver detalle</button>
        <button md-button>Reservar</button>
      </md-card-actions>
    </md-card>`
})
export class ActivityCardComponent {
  @Input() activity: Activity;

}
