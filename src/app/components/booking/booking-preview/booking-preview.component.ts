import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-preview',
  template: `
    <app-booking-detail-card [booking]="booking" [pickUpLocation]="pickUpLocation" [activity]="activity"></app-booking-detail-card>

    <md-card *ngIf="hasPickUpLocation">
      <div class="mb-3">{{ pickUpLocation?.name}} - {{ pickUpLocation?.formattedAddress }}</div>
      <app-location-map [location]="pickUpLocation"></app-location-map>
    </md-card>
  `,
  styleUrls: ['./booking-preview.component.scss']
})
export class BookingPreviewComponent implements OnInit {
  @Input() booking;
  @Input() pickUpLocation;
  @Input() rate;
  @Input() activity;
  constructor() { }

  ngOnInit() { }

}