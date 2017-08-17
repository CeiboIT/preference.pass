import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures, GetDetail} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';
import { BookingStep1 } from '../../../actions/booking';
import {SearchPPCard} from '../../../actions/subscription';

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid py-5">
      <div class="row" *ngIf="step === 1">
        <div class="col-md-8 offset-md-2">
          <app-booking-step-1
            class="col-12"
            [parent]="booking"
            [activity]="activity$ | async "
            [departures]="departures$ | async "
            [rate]="rate"
            (onSubmit)="onStep1Submit($event)"
          >
          </app-booking-step-1>
        </div>
      </div>
      
      <div class="col-md-8 offset-md-2" *ngIf="step === 2">
        <div class="col-12">
          <button md-button color="primary" type="button" (click)="changeToStep(1)">
            Back
          </button>
          <h1 class="saving text-center">
            {{ savingMessage }}
            <app-total-saving [rate]="rate" [amountOfKids]="kidsAmount" [amountOfAdults]="adultsAmount"></app-total-saving>
          </h1>
          
        </div>        
        
        <h2 class="col-12 text-center">
          Details
        </h2>
        <app-booking-step-2
          class="col-12"
          [booking]="booking.value"
          [activity]="activity$ | async "
          [departures]="departures$ | async "
          [rate]="rate"
          (onSuccess)="step2Success($event)"
        >
        </app-booking-step-2>
      </div>
    </div>
  `,
  styles: [
    `
      .saving {
        color: green;
      }
      .button-success {
        color: white;
        background-color: green;
      }
    `
  ]
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  public departures$: Observable<any>;
  public activity$: Observable<any>;
  public user$: Observable<any>;
  public user;
  public departures;
  public activity;
  public step = 1;
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

    this.user$.subscribe((user) => this.user = user);
    this.departures$.subscribe((departures) => this.departures = departures);
    this.user$.subscribe((user) => this.user = user);

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

  get kidsAmount() {
    return this.booking.get('kidsAmount').value;
  }

  get adultsAmount() {
    return this.booking.get('adultsAmount').value +  1;
  }

  get rate() {
    if (this.activity &&  this.activity.rates && this.activity.rates.length === 1) {
      return this.activity.rates[0];
    }
  }

  step2Success($event) {
    console.log($event);
    console.log('Booking so far: ', $event);
    this.store.dispatch(new BookingStep1($event));
  }

  get savingMessage() {
    if (!this.booking.get('adultsAmount').value && !this.booking.get('kidsAmount').value)  {
      return 'Booking alone you are saving';
    } else {
      return 'Booking you are saving';
    }
  }

  onStep1Submit(e) {
    e.preventDefault();
    let _booking = this.booking.value;
    _booking.activityId = this.activity.id;
    _booking.owner = this.user.id;
    const _rate = this.rate;
    _booking.rate = {
      currency: _rate.currency,
      discountPrice: _rate.discountPrice,
      name: _rate.name
    };

    console.log('Booking data so far', _booking);
    localStorage.setItem('booking', _booking);
    this.changeToStep(2);
  }

  changeToStep = (step) => {
    this.step = step;
  };

  onCardFormValid($event) {
    console.log('Event in form', $event);
    const _code = $event.value.code;
    this.store.dispatch(new SearchPPCard(_code));
  }
}
