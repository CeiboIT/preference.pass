import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-detail-card',
  template: `
    <md-card>>
      
    </md-card>
  `
})
export class BookingDetailCardComponent implements OnInit {
  @Input() booking;
  @Input() activity;
  @Input() departures;
  constructor() { }

  ngOnInit() {
  }

}
