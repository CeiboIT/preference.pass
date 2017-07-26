import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <app-booking-date-selector-form [parent]="booking"></app-booking-date-selector-form>
          <app-pick-location-and-time-selection-form 
            [parent]="booking"
            [departures]="departures$ | async "
          >
          </app-pick-location-and-time-selection-form>
        </div>
      </div>
      {{ booking.value | json }}
    </div>
  `
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  public departures$: Observable<any>;
  constructor(private fb: FormBuilder, private store: Store<any>, private activatedRoute: ActivatedRoute) {
   this.booking = this.fb.group({
     executionDate: [''],
     executionTime: [''],
     pickUpLocationId: [''],
     pickUpTime: ['']
   });
   this.departures$ = onStateChangeObservable(this.store, 'activities.departures');
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new GetDepartures(id));
  }
}
