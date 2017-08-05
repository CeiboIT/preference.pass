import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';
import { compress } from '../../../constants/filestack';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent {
  @Input() activity;
  @Input() user;
  @Output() selectedRate: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  goToLanding(): void {
    this.router.navigate(['/landing']);
  }

  onRateSelected($event) {
    this.selectedRate.emit($event);
  }

  bookNow($event) {
    console.log('Book now');
    this.selectedRate.emit($event);
  }
  get activityCover() {
    if (this.activity.coverPhoto) {
      return compress(this.activity.coverPhoto.url);
    } else {
      return '';
    }
  }

}
