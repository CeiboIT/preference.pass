import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-preview',
  template: `
    <md-card class="card-row">
    <div class="card-row-inner">
        <div class="card-row-image" [ngStyle]="{'background-image': 'url(' + mainPhoto + ')'}">
            <div class="card-row-label text-center">{{ pickUpLocation?.name }}</div><!-- /.card-row-label -->
            
        </div><!-- /.card-row-image -->

        <div class="card-row-body">
            <h2 class="card-row-title"><a >{{ activity?.name }}</a></h2>
            <div class="card-row-content"><p> {{activity?.shortDescription}} </p>

            <h2 class="card-row-title"><a >Departs From</a></h2>
            {{ pickUpLocation?.name}} - {{ pickUpLocation?.formattedAddress }}
            </div><!-- /.card-row-content -->
        </div><!-- /.card-row-body -->

        <div class="card-row-properties">
        <dl>
            
                <dd>Date</dd><dt>{{formattedDate}}</dt>
                <dd *ngIf="booking.pickUpTime">Departs at:</dd><dt *ngIf="booking.pickUpTime">{{ booking.pickUpTime}}</dt>

            
                <dd>Adults</dd><dt>{{booking.adultsAmount || 1}}</dt>
                <dd>Kids</dd><dt>{{booking.kidsAmount || 0}}</dt>
                <dd>Category</dd><dt>{{ activity?.category?.name }}</dt>
        </dl>
    </div>
    </div><!-- /.card-row-inner -->
</md-card>
<md-card>
  <div class="mb-3">{{ pickUpLocation?.name}} - {{ pickUpLocation?.formattedAddress }}</div>
  <app-location-map [location]="pickUpLocation"></app-location-map>
</md-card>

  `,
  styles: [
    `

.card-row {
  background-color: #fff;
  margin: 0px 0px 30px 0px; 
padding: 0}
  .card-row:last-child {
    margin-bottom: 0px; }

.card-row-inner {
  display: table;
  width: 100%; }

.card-row-image, .card-row-body, .card-row-properties {
  display: table-cell;
  vertical-align: top; }
  @media (max-width: 1199px) {
    .card-row-image, .card-row-body, .card-row-properties {
      display: block; } }

.card-row-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  position: relative;
  width: 262px; }
  @media (max-width: 1199px) {
    .card-row-image {
      width: 100%; } }

.card-row-body {
  padding: 24px; }

.card-row-properties {
  padding: 24px;
  width: 260px; }
  @media (max-width: 1199px) {
    .card-row-properties {
      padding: 0px 24px 24px 24px;
      width: 100%; } }

      @media (max-width: 600px) {
        .card-row-properties {
          padding: 0px 16px 24px 16px;
          width: 100%; } 
          .card-row-body {
            padding: 24px 16px;
          }
        
        }

.card-row-title {
  font-size: 18px;
  padding: 0px; }
  .card-row-title a {
    color: #363636; }

.card-row-properties dl {
  margin: 0px;
  padding: 0px; }

.card-row-properties dd {
  float: left;
  margin: 0;
  line-height: 36px; }

.card-row-properties dt {
  border-bottom: 1px dashed #e9e9e9;
  line-height: 36px;
  text-align: right; }
  .card-row-properties dt:last-child {
    border-bottom: 0px; }

.card-row-label {
  background-color: #c6af5c;
  color: #fff;
  left: 50%;
  font-size: 13px;
  padding: 3px 15px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  max-width: 60%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  z-index: 2; 
  text-transform: lowercase;}

  .card-row-label:first-letter {
    text-transform: capitalize;
}   
    `
  ]
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
