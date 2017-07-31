import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures, GetDetail} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <app-booking-date-selector-form [activity]="activity$ | async" [parent]="booking"></app-booking-date-selector-form>
          <app-pick-location-and-time-selection-form 
            [parent]="booking"
            [departures]="departures$ | async "
          >
          </app-pick-location-and-time-selection-form>
          <app-companion-charge-form [parent]="companion"></app-companion-charge-form>
        </div>
      </div>
      
      <pre>
      {{ booking.value | json }}
      <h2>
        Companion
      </h2>
      {{ companion.value | json }}
      </pre>
    </div>
  `
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  public companion;
  public departures$: Observable<any>;
  public activity$: Observable<any>;
  constructor(private fb: FormBuilder, private store: Store<any>, private activatedRoute: ActivatedRoute) {
   this.booking = this.fb.group({
     executionDate: [''],
     executionTime: [''],
     pickUpLocationId: [''],
     pickUpTime: ['']
   });
   this.departures$ = onStateChangeObservable(this.store, 'activities.departures');
    this.activity$ = onStateChangeObservable(this.store, 'activities.selectedActivity');
    this.companion = this.fb.group({
      fullName: [''],
      email: [''],
      type: ['']
    });


  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new GetDepartures(id));

    this.activity$.subscribe((data) => {
      console.log(data);
      if (data && !data.id) {
        this.store.dispatch(new GetDetail(id));
      }
    });
  }
}
