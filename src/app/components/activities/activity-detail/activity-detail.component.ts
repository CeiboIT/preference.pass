import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent {
  @Input() activity;
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor(
    private router: Router
  ) { }

  goToLanding(): void {
    this.router.navigate(['/landing']);
  }
}
