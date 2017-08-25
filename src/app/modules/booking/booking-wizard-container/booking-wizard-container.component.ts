import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetDepartures, GetDetail} from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {onStateChangeObservable} from '../../../utils/store';
import {BookingFinish, BookingStep1, MoveToStep} from '../../../actions/booking';
import {SearchPPCard} from '../../../actions/subscription';
import {AddCompanion} from "../../../actions/user";

const mockCompanions = [ { "id": "cj6jep4k7m35d0111936g1hzz", "fullName": "Marcos Potignano",
  "email": "mpotignano@gmail.com", "personType": 'Adult',
  "subscriptions": [ { "id": "cj6i4pv0fb7x80110zl5fnkjf", "__typename": "Subscription" }], "__typename": "Companion" },
  { "id": "cj6jep4k7m35d0111936g1hxx", "fullName": "Juan Carlos Potignano",
    "email": "jcpotignano@gmail.com", "personType": 'Adult',
    "subscriptions": [], "__typename": "Companion" },

  { "id": "cj6jep4k7m35d0111936g1hdd", "fullName": "Luis Romualdo Potignano",
    "email": "lpotignano@gmail.com", "personType": 'Kid',
    "subscriptions": [ { "id": "cj6i4pv0fb7x80110zl5fnkjf", "__typename": "Subscription" }], "__typename": "Companion" },

  { "id": "cj6jep4k7m35d0111936g1hee", "fullName": "Laura Potignano",
    "email": "lpotignano@gmail.com", "personType": 'Kid',
    "subscriptions": [], "__typename": "Companion" }
]

const mockSubscription = { "id": "cj6i4pv0fb7x80110zl5fnkjf", "kids": 2, "adults": 2, "isComingAlone": false, "companions": [ { "id": "cj6jep4k7m35d0111936g1hzz", "fullName": "Marcos Potignano", "email": "mpotignano@gmail.com", "personType": "Adult", "__typename": "Companion" },
  { "id": "cj6jep4k7m35d0111936g1hdd", "fullName": "Luis Romualdo Potignano", "email": "lpotignano@gmail.com", "personType": "Kid", "__typename": "Companion" }

], "__typename": "Subscription" };


const _mockBooking = {
  kidsAmount: 1,
  adultsAmount: 1,
  isComingAlone: false
};


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
            [loading]="loading$ | async"
            (onSuccess)="step2Success($event)"
          >
          </app-booking-step-2>
        </div>
      </div>
      
      <div *ngIf="bookingStep === 'Subscription'" class="col-md-8 offset-md-2">
        <div class="row">
          <div class="col-12">
            <button md-button color="primary" (click)="backToStep1()">
              Back
            </button>            
          </div>
        </div>
        <app-subscription-wizard
          [kidsAmount]="booking.value.kidsAmount"
          [adultsAmount]="booking.value.adultsAmount"
          [isComingAlone]="booking.value.isComingAlone"
          [startsAt]="booking.value.executionDate"
          (subscriptionSuccess)="onSubscriptionSuccess($event)"
          (subscriptionError)="onSubscriptionError($event)"
        >
        </app-subscription-wizard>
      </div>
      

      <div *ngIf="bookingStep === 'Companions'" class="col-md-8 offset-md-2">
        <div *ngIf="!isComingAlone" class="row">
          <h2 class="w-100 text-center">
            Charge companions to your subscription
          </h2>
        </div>
        <app-companions-form [parent]="booking" *ngIf="!isComingAlone"
          (onAddCompanionSubmit)="addCompanion($event)"
          [subscription]="activeSubscription$ | async"
          [companions]="companions$ | async "
          [booking]="booking.value"
        >
        </app-companions-form>
        
        <button (click)="finishBooking()" md-button class="button-success w-100 py-2 mt-3" [disabled]="loadingBooking">
          <span *ngIf="loadingBooking"><i class="fa fa-spinner fa-spin"></i> </span>
          Finish Booking
        </button>
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
  public loadingBooking;
  public user;
  public subscription;
  public departures;
  public activity;
  public step = 1;
  public bookingStep = '';
  private bookingId = '';
  selectedRateId;
  private activeSubscriptionId = '';
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
    this.user$.subscribe((user) => this.user = user);
    this.departures$.subscribe((departures) => this.departures = departures);
    this.user$.subscribe((user) => this.user = user);
    this.activity$.subscribe(activity => this.activity = activity);

    this.loadingBooking$.subscribe(status => {
      this.loadingBooking = status;
    })
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.activatedRoute.snapshot.queryParams){
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

  get kidsAmount() {
    return this.booking.get('kidsAmount').value;
  }

  get adultsAmount() {
    return this.booking.get('adultsAmount').value +  1;
  }

  get isComingAlone() {
    const _bookingValue = this.booking.value;
    return (_bookingValue.isComingAlone || (_bookingValue.kidsAmount && _bookingValue.adultsAmount));
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
  }

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
}
