import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures, GetDetail} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';
import {BookingFinish, BookingStep1, MoveToStep} from '../../../actions/booking';
import {SearchPPCard} from '../../../actions/subscription';
import {AddCompanion, AddCompanions} from '../../../actions/user';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-wizard-container',
  template: `
    <div class="container-fluid py-5">
      
      <div *ngIf=" bookingStep === 'Details'">
        <div class="row" *ngIf="step === 1">
          <div class="col-md-8 offset-md-2">
            <app-booking-step-1
              class="col-12"
              [parent]="booking"
              [activity]="activity$ | async "
              [departures]="departures$ | async "
              [rate]="rate"
              [subscription]="activeSubscription"
              (onSubmit)="onStep1Submit($event)"
            >
            </app-booking-step-1>

            <div *ngIf="booking.get('kidsAmount') && 
            booking.get('kidsAmount').invalid && (booking.get('kidsAmount').dirty || booking.get('kidsAmount').touched)"
                 class="alert alert-danger">
              <div *ngIf="booking.get('kidsAmount').errors.required">
                Name is required.
              </div>
              <div *ngIf="booking.get('kidsAmount').errors.minlength">
                Name must be at least 4 characters long.
              </div>
              <div *ngIf="booking.get('kidsAmount').errors.forbiddenName">
                Name cannot be Bob.
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-8 offset-md-2" *ngIf="step === 2">
          <div class="row">
            <div class="col-12">
              <button md-button color="primary" type="button" (click)="changeToStep(1)">
                Back
              </button>
              <h1 class="saving text-center">
                {{ savingMessage }}
                <app-total-saving [rate]="rate" [amountOfKids]="kidsAmount" [amountOfAdults]="adultsAmount"></app-total-saving>
              </h1>
            </div>
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
            [loading]="loading$ | async"
            (onSuccess)="step2Success($event)"
          >
          </app-booking-step-2>
        </div>
      </div>
      
      <div *ngIf="bookingStep === 'Subscription'" class="col-md-8 offset-md-2">
        <div class="row">
          <div class="col-12">
            <button md-button color="primary" (click)="backToStep1()" class="mb-5">
              Back
            </button>            
          </div>
        </div>
        <app-subscription-wizard
          [user]="user"
          [kidsAmount]="booking.value.kidsAmount"
          [adultsAmount]="booking.value.adultsAmount"
          [isComingAlone]="booking.value.isComingAlone"
          [startsAt]="booking.value.executionDate"
          (subscriptionSuccess)="onSubscriptionSuccess($event)"
          (subscriptionError)="onSubscriptionError($event)"
        >
        </app-subscription-wizard>
      </div>

      <div *ngIf="bookingStep ===  'CompanionsToTrip'">
        <app-subscription-companions-form
          [subscriptionObserver]="activeSubscription$"
          [userCompanions]="companions$ | async "
          (onSubmit)="addCompanionsToTrip($event)"
          [booking]="booking.value"
        >
        </app-subscription-companions-form>
      </div>
      
      <div *ngIf="bookingStep === 'CompanionsToBooking'" class="col-md-8 offset-md-2">
        <div *ngIf="!isComingAlone" class="row">
          <div class="row">
            <div class="col-12">
              <h2 class="w-100 text-center">
                Who is coming with you to {{ activity?.name}} ?
              </h2>
              <app-subscription-companion-select-form [parent]="booking"
                                                      [kidsAmount]="booking.value.kidsAmount"
                                                      [adultsAmount]="booking.value.adultsAmount" 
                                                      [subscription]="activeSubscription$ | async ">
                
              </app-subscription-companion-select-form>
            </div>
          </div>
        </div>
        <button (click)="finishBooking()" md-button class="button-success w-100 py-2 mt-3" [disabled]="loadingBooking">
          <span *ngIf="loadingBooking"><i class="fa fa-spinner fa-spin"></i> </span>
          Finish Booking
        </button>
      </div>

      <div *ngIf="bookingStep === 'FinishBooking'">
        <div class="container text-center">
            <md-card>
              <app-success-animation></app-success-animation>
              <h2>Finish booking successful</h2>
              <div>
                <button md-raised-button color="primary" routerLink="/">
                  Go to landing
                </button>
                <button md-raised-button color="accent" routerLink="/user/bookings">
                  Go to my bookings list
                </button>
              </div>
            </md-card>
        </div>
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
        font-size: 1.6em;
        background-color: green;
        font-size: 1.6em;
      }

      @media (max-width: 767px) {
        .button-success {
          font-size: 1.1em;
        }
      }
      @media (max-width: 767px) {
        .button-success {
          font-size: 1.1em;
        }
      }
    `
  ]
})
export class BookingWizardContainerComponent implements OnInit {
  public booking;
  public departures$: Observable<any>;
  public activity$: Observable<any>;
  public user$: Observable<any>;
  public companions$: Observable<any>;
  public bookingStep$: Observable<any>;
  public activeSubscription$: Observable<any>;
  public loading$: Observable<any>;
  public loadingBooking$: Observable<any>;
  public companionLoading$: Observable<any>;
  public loadingBooking = false;
  public user;
  public subscription;
  public departures;
  public activity;
  public step = 1;
  public bookingStep = '';
  private bookingId = '';
  private hasValidSubscription = false;
  public activeSubscription;
  selectedRateId;
  constructor(private fb: FormBuilder, private store: Store<any>, private activatedRoute: ActivatedRoute) {
   this.booking = this.fb.group({
     executionDate: [''],
     executionTime: [''],
     pickUpLocationId: [''],
     pickUpTime: [''],
     companionsIds: [''],
     isComingAlone: [false],
     kidsAmount: [0],
     adultsAmount: [0]
   });

    this.departures$ = onStateChangeObservable(this.store, 'activities.departures');
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.companions$ = onStateChangeObservable(this.store, 'auth.user.companions');
    this.activity$ = onStateChangeObservable(this.store, 'activities.selectedActivity');
    this.bookingStep$ = onStateChangeObservable(this.store, 'booking');
    this.activeSubscription$ = onStateChangeObservable(this.store, 'booking.activeSubscription');
    this.loading$ = onStateChangeObservable(this.store, 'booking.sending');
    this.loadingBooking$ = onStateChangeObservable(this.store, 'booking.loadingBooking');
    this.companionLoading$ = onStateChangeObservable(this.store, 'user.addingCompanion');
    this.user$.subscribe((user) => this.user = user);
    this.departures$.subscribe((departures) => this.departures = departures);
    this.user$.subscribe((user) => this.user = user);
    this.activity$.subscribe(activity => this.activity = activity);

    this.loadingBooking$.subscribe(status => {
      this.loadingBooking = status;
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.activatedRoute.snapshot.queryParams) {
      this.selectedRateId = this.activatedRoute.snapshot.queryParams.rateId;
    }
    console.log(this.activatedRoute.snapshot);
    this.store.dispatch(new GetDepartures(id));
    this.activity$.subscribe((data) => {
      console.log(data);
      if (data && !data.id) {
        this.store.dispatch(new GetDetail(id));
      }
    });

    this.booking.get('executionDate').valueChanges.subscribe((executionDate) => {
      this.getActiveSubscription();
    });

    this.booking.get('kidsAmount').valueChanges.subscribe((amount) => {
      if (amount && this.activeSubscription.id) {
        if (amount > this.activeSubscription.kids) {
          console.log('Controlling kids amount');
          this.booking.get('kidsAmount').setValue(this.activeSubscription.kids);
        }
      }
    });

    this.booking.get('adultsAmount').valueChanges.subscribe((amount) => {
      if (amount && this.activeSubscription.id) {
        if (amount > this.activeSubscription.adults) {
          console.log('Controlling adultsAmount amount');
          this.booking.get('adultsAmount').setValue(this.activeSubscription.adults);
        }
      }
    });

    this.store.dispatch(new MoveToStep({step: 'Details'}));

    this.bookingStep$.subscribe((booking) => {
      if (booking.currentStep) {
        this.bookingStep = booking.currentStep;
        if (booking.booking && booking.booking.id) {
          this.bookingId = booking.booking.id;
        }
      }
    });

    this.activeSubscription$.subscribe((subscription) => {
      this.subscription = subscription;
    });
  }

  backToStep1() {
    this.store.dispatch(new MoveToStep({step: 'Details'}));
    this.step = 1;
    document.body.scrollTop = 0;
  }

  getActiveSubscription() {
    this.activeSubscription = {};
    if (this.user && this.user.subscriptions && this.user.subscriptions.length && this.booking.get('executionDate').value) {
      const _execution = moment(this.booking.get('executionDate').value);
      this.hasValidSubscription = false;
      this.user.subscriptions.some((subscription) => {
        const _from = moment(subscription.startsAt);
        const _to = moment(subscription.validity);
        if ( _from <= _execution && _to >= _execution) {
          this.activeSubscription = subscription;
          this.hasValidSubscription = true;
          if (this.booking.get('kidsAmount').value > subscription.kids) {
            console.log('Change value for kidsAmount');
            this.booking.get('kidsAmount').setValue(subscription.kids);
          }
          if (this.booking.get('adultsAmount').value > subscription.adults) {
            console.log('Change value for adultsAmount');
            this.booking.get('adultsAmount').setValue(subscription.adults);
          }
          return true;
        }
      });
    }
  }

  get kidsAmount() {
    return this.booking.get('kidsAmount').value;
  }

  get adultsAmount() {
    return this.booking.get('adultsAmount').value +  1;
  }

  get isComingAlone() {
    const _bookingValue = this.booking.value;
    return (_bookingValue.isComingAlone || ( !_bookingValue.kidsAmount && !_bookingValue.adultsAmount));
  }

  get rate() {
    let rate ;
    if (this.activity &&  this.activity.rates && this.activity.rates.length === 1) {
      rate = this.activity.rates[0];
    };
    if (this.activity && this.activity.rates && this.selectedRateId) {
      this.activity.rates.some(r => {
        if (r.id === this.selectedRateId) {
          rate = r;
          return true;
        }
      });
    }
    return rate;
  }

  step2Success($event) {
    console.log($event);
    console.log('Booking so far: ', $event);
    this.store.dispatch(new BookingStep1($event));
    document.body.scrollTop = 0;

  }

  get savingMessage() {
    if (!this.booking.get('adultsAmount').value && !this.booking.get('kidsAmount').value)  {
      return 'Booking alone you are saving';
    } else {
      return 'Booking you are saving';
    }
  }

  onSubscriptionSuccess($event) {
    console.log($event);
  }

  addCompanion($event) {
    console.log($event);
    this.store.dispatch(new AddCompanion({companion: $event, subscriptionId: this.subscription.id,
      executionDate: this.booking.value.executionDate}));
  }

  onStep1Submit(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    let _booking = this.booking.value;
    _booking.activityId = this.activity.id;
    _booking.owner = this.user.id;
    if (_booking.isComingAlone) {
      _booking.kidsAmount = 0;
      _booking.adultsAmount = 0;
    }
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

  finishBooking() {
    let _booking = this.booking.value;
    _booking.id = this.bookingId;
    _booking.subscriptionId = this.subscription.id;
    this.store.dispatch(new BookingFinish(_booking));
  }

  onCardFormValid($event) {
    console.log('Event in form', $event);
    const _code = $event.value.code;
    this.store.dispatch(new SearchPPCard(_code));
  }

  addCompanionsToTrip($event) {
    console.log($event);
    this.store.dispatch(new AddCompanions({
      companions : $event,
      subscriptionId: this.subscription.id,
      executionDate: this.booking.value.executionDate
    }));
  }
}
