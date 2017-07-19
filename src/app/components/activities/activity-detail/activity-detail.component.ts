import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent {
  @Input() activity;
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

}
