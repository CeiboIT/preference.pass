import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-preview',
  template: `
    <md-card class="card-row">
      <div class="card-row-inner">
          <div class="card-row-image" [ngStyle]="{'background-image': 'url(' + mainPhoto + ')'}">
              <div class="card-row-label text-center">{{ pickUpLocation?.name }}</div> 
          </div>

          <div class="card-row-body">
              <h2 class="card-row-title">{{ activity?.name }}</h2>
              <div class="card-row-content"><p> {{activity?.shortDescription}} </p>

              <h2 class="card-row-title">Departs From</h2>
              {{ pickUpLocation?.name}} - {{ pickUpLocation?.formattedAddress }}
              </div>
          </div>

          <div class="card-row-properties">
            <dl>
              <dd>Date</dd><dt>{{ formattedDate }}</dt>
              <dd *ngIf="booking.pickUpTime">Departs at:</dd><dt *ngIf="booking.pickUpTime">{{ booking.pickUpTime }}</dt>
              <dd>Adults</dd><dt>{{ booking.adultsAmount || 1 }}</dt>
              <dd>Kids</dd><dt>{{ booking.kidsAmount || 0 }}</dt>
              <dd>Category</dd><dt>{{ activity?.category?.name }}</dt>
            </dl>
          </div>
      </div>
  </md-card>
  <md-card>
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

  ngOnInit() {
    console.log(this.pickUpLocation);
  }

  get formattedDate() {
    return moment(this.booking.executionDate).format('MMMM Do YYYY');
  }

  get mainPhoto() {
    if (this.pickUpLocation && this.pickUpLocation.mainPhoto) {
      return this.pickUpLocation.mainPhoto[0].url;
    } else {
      return '';
    }
  }

}
