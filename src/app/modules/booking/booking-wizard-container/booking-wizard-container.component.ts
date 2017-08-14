import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures, GetDetail} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';
import {isComingAlone} from '../../../utils/user';
import * as moment from 'moment';
import {SearchPPCard} from '../../../actions/subscription';
const _today = moment();
const _inthreemonths = _today.clone();
_inthreemonths.add(3, 'months');
console.log(_inthreemonths);
@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid">
      <div class="row">
        <form class="col-10" novalidate (ngSubmit)="onBookingSubmit($event)">
          <div>
            <h2 class="saving">
              {{ savingMessage }}
              <app-total-saving [rate]="rate" [amountOfKids]="kidsAmount" [amountOfAdults]="adultsAmount"></app-total-saving>
            </h2>
          </div>
          <div>
            <h2>
              How many people is coming with you?
            </h2>
            <app-companion-amount [parent]="booking"></app-companion-amount>  
          </div>
          
          <div>
            <h2>
              When do you wanna go to {{ activity?.name}}
            </h2>
            <app-date-select
              [parent]="booking"
              [parentKey]="'executionDate'"
              [years]="years"
              [initialDate]="today"
              [limitDate]="limitDate"
            >
            </app-date-select>
          </div>
          
          <app-pick-location-and-time-selection-form *ngIf="(departures$ | async)?.length"
            [parent]="booking"
            [departures]="departures$ | async "
          >
          </app-pick-location-and-time-selection-form>
          <div class="col-12">
            <button md-raised-button color="primary" type="submit">
              Book now
            </button>            
          </div>
        </form>
      </div>
      
      <pre>
      {{ booking.value | json }}
      <h2>
        Companion
      </h2>
      {{ companion.value | json }}
      </pre>
    </div>
  `,
  styles: [
    `
      .saving {
        color: green;
      }
    `
  ]
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  public companion;
  public card;
  public subscription;
  public today = _today;
  public limitDate = _inthreemonths;
  public subscriptionCompanions= [{
    id: '123',
    fullName: 'Emiliano Potignano',
    type: 'Adult'
  }, {
    id: '3455',
    fullName: 'Ayrton Potignano',
    type: 'Kid'
  }];
  public departures$: Observable<any>;
  public activity$: Observable<any>;
  public user$: Observable<any>;
  public user;
  public departures;
  public activity;
  public subscriptionValidity;
  public subscriptionKids;
  public subscriptionAdults;
  constructor(private fb: FormBuilder, private store: Store<any>, private activatedRoute: ActivatedRoute) {
   this.booking = this.fb.group({
     executionDate: [''],
     executionTime: [''],
     pickUpLocationId: [''],
     pickUpTime: [''],
     companionsIds: [''],
     isComingAlone: [''],
     kidsAmount: [''],
     adultsAmount: ['']
   });
    this.departures$ = onStateChangeObservable(this.store, 'activities.departures');
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.activity$ = onStateChangeObservable(this.store, 'activities.selectedActivity');
    this.companion = this.fb.group({
      fullName: [''],
      email: [''],
      type: ['']
    });

    this.user$.subscribe((user) => this.user = user);
    this.departures$.subscribe((departures) => this.departures = departures);
    this.user$.subscribe((user) => this.user = user);
    this.user$.subscribe((user) => {
      if (user && user.id && user.subscription) {
        this.subscriptionCompanions = user.subscription.companions;
        this.subscriptionValidity = moment(user.subscription.validity);
        this.subscriptionKids =  user.subscription.kids;
        this.subscriptionAdults =  user.subscription.adults;
      }
    });

    this.activity$.subscribe(activity => this.activity = activity);
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

  get years() {
    const actualYear = new Date().getFullYear();
    console.log(_inthreemonths);
    let _years = [actualYear];

    if (_inthreemonths.year() !== actualYear) {
      _years.push(_inthreemonths.year());
    }
    return _years;
  }

  get kidsAmount() {
    return this.booking.get('kidsAmount').value;
  }

  get adultsAmount() {
    return this.booking.get('adultsAmount').value +  1;
  }

  get isComingAlone() {
     return isComingAlone(this.user);
  }

  get rate() {
    if (this.activity &&  this.activity.rates && this.activity.rates.length === 1) {
      return this.activity.rates[0];
    }
  }

  get savingMessage() {
    if (!this.booking.get('adultsAmount').value && !this.booking.get('kidsAmount').value)  {
      return 'Coming alone you are saving';
    } else {
      return 'You are saving';
    }
  }

  onBookingSubmit(e) {
    e.preventDefault();
    let _booking = this.booking.value;
    _booking.activitiyId = this.activity.id;
    _booking.owner = this.user.id;
    console.log(_booking);
  }

  onCardFormValid($event) {
    console.log('Event in form', $event);
    const _code = $event.value.code;
    this.store.dispatch(new SearchPPCard(_code));
  }
}
