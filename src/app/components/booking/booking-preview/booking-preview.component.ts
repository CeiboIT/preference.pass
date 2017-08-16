import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-preview',
  template: `
    <md-card class="booking-preview">
      <md-card-content>
        <div class="row">
          <div class="col-12 text-center">
           <span class="booking-preview__activity-name">
             {{ activity?.name }}
           </span>
          </div>
          <div class="col-12 mt-3 text-center booking-preview__date">
            {{formattedDate}}
          </div>
        </div>
        <div class="col-12 text-center" *ngIf="booking.adultsAmount || booking.kidsAmount">
          <h2>
            Companions
          </h2>
          <span *ngIf="booking.adultsAmount" class="booking-preview__people">
            Adults:  {{booking.adultsAmount}}
          </span>
          <span class="ml-2" *ngIf="booking.kidsAmount" class="booking-preview__people">
            Kids: {{booking.kidsAmount}}
          </span>
        </div>
        <div class="row">
          <div class="col-12 text-center booking-preview__departs-from">
            Departs from
          </div>
          <div class="col-12 mt-3">
            <app-pickup-location-preview [pickUpLocation]="pickUpLocation"></app-pickup-location-preview>
          </div>
          
          <div class="col-12 mt-3 text-center">
            <span class="booking-preview__departsAt">
              Departs at: {{ booking.pickUpTime}}
            </span>
          </div>
        </div>
      </md-card-content>
    </md-card>
  `,
  styles: [
    `
      .booking-preview {}
      .booking-preview__activity-name {
        font-size: 2em;
      }

      .booking-preview__date {
        font-size: 2em;
      }
      .booking-preview__people {
        font-size: 1.5em;
      }
      
      .booking-preview__departs-from {
        font-size: 1.5em;
      }
      
      .booking-preview__departsAt {
        font-size: 2em;
        color: #5bc0de;
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

}
