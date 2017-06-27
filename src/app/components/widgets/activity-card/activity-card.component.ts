import { Component, Input } from '@angular/core';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html' 
})
export class ActivityCardComponent {
  @Input() activity : Activity;

}
