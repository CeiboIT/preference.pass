import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-booking-user-location-form',
  template: `
    <div>
      <div [formGroup]="booking">
        <app-where-is-customer [parent]="booking"></app-where-is-customer>
      </div>
      <div *ngIf="user && !user.phoneNumber">
        <app-user-phone-number [parent]="userData"></app-user-phone-number>
      </div>
    </div>
  `
})
export class BookingUserLocationFormComponent implements OnInit {
  @Input() booking: FormGroup;
  @Input() userData: FormGroup;
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
