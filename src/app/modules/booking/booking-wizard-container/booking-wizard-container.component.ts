import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <app-booking-date-selector-form [parent]="booking"></app-booking-date-selector-form>
        </div>
      </div>
      {{ booking.value | json }}
    </div>
  `
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  constructor(private fb: FormBuilder, private store: Store<any>) {
   this.booking = this.fb.group({
     executionDate: [''],
     executionTime: ['']
   }) ;
  }
  ngOnInit() { }
}
