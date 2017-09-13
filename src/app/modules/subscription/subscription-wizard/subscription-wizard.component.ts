import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { PostSubscription, ValidateCode } from '../../../actions/subscription';
import { stripeHandlerError } from '../../../constants/stripe';
import { environment } from "../../../../environments/environment";
import * as moment from 'moment';
const _today = moment();
const _inthreemonths = _today.clone();
_inthreemonths.add(3, 'months');

interface DiscountValidationResponse {
  err?: any;
  valid?: boolean;
  assigned?: boolean;
}


@Component({
  selector: 'app-subscription-wizard',
  template: `
  <div>
    <md-card>
      <wizard-header [step]="step"></wizard-header>
      <div [hidden]="step !== 1">
        <div>
          <div>
            <div class="row" *ngIf="adultsAmount || kidsAmount">
              <div class="col-6" *ngIf="adultsAmount">
                <h2>
                  Adults
                </h2>
                <p>
                  {{adultsAmount}}
                </p>
              </div>
              <div class="col-6" *ngIf="kidsAmount">
                <h2>
                  Kids
                </h2>
                <p>
                  {{kidsAmount}}
                </p>
              </div>
            </div>
          </div>
          <div [hidden]="hasDiscountCard">
            <div class="row" *ngIf="!hasDiscount">
              <button md-button color="accent" (click)="claim()">
                I have a discount code
              </button>
              <div *ngIf="claimDiscount">
                <app-discount-code-form [parent]="discountCode"
                  (onValid)="onDiscountFormValidity($event)"
                ></app-discount-code-form>
              </div>
            </div>
            
            <h2 *ngIf="hasDiscount" class="text-center">
              Wow!! Your subscription will have a 50% off if you choose a package! Enjoy!
            </h2>
            
            <app-subscription-pricing-container [parent]="paymentRequest"
                                                [selectPlan]="selectPlan"
                                                (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)"
                                                [hasDiscount]="hasDiscount">
            </app-subscription-pricing-container>
            <!--<div *ngIf="paymentRequest.value.plan">
              <h2 class="mt-2">
                Select your subscription start date
              </h2>
              <app-subscription-start-date [parent]="paymentRequest"
                                           [selectedPlan]="paymentRequest.get('plan').value"
                                           (onDateSelected)="onStartDateSelected($event)"
                                           [limitDate]="limitDate"
                                           [initialDate]="startsAt"
              ></app-subscription-start-date>
            </div>-->
          </div>
        </div>

      </div>
      <div [hidden]="step !== 2">
        <div class="d-flex flex-column w-100">
          <h2 class="text-center">Amount: USD {{ totalPay }}</h2>
          <div class="row">
            <div class="col-12 text-center my-5">
              <app-paypal-button
                [client]="payPalClient"
                [transactions]="payPalTransactions"
                (onAuthorized)="paypalAuthorized($event)"
              >
              </app-paypal-button>
            </div>
          </div>
          <div class="or"> OR </div>

          <span class="text-danger text-center my-2">{{ cardError }} {{ payErrorMsg$ | async }}</span>

          <app-payment-form
              [onSuccess]="onCardChargeSuccess"
              [onError]="onCardChargeError"
              [stripeKey]="stripeKey"
              [error]="displayError$ | async"
              [errorMsg]="payErrorMsg$ | async"
              [loading]="payLoading$ | async">
          </app-payment-form>
        </div>
      </div>

      <div class="d-flex justify-content-between mt-4">
        <button md-button (click)="back()" [disabled]="step === 1 || hasDiscountCard">
          BACK
        </button>
        <button md-button (click)="next()" [disabled]="step === 2 || hasDiscountCard">
          CONTINUE
        </button>
      </div>
    </md-card>
  </div>
  `,
  styles: [`
    .or {
      display:flex;
      justify-content:center;
      align-items: center;
      color:rgba(0, 0, 0, 0.38);
    }
    
    .or:after,
    .or:before {
        content: "";
        display: block;
        background: rgba(0, 0, 0, 0.12);
        width: 30%;
        height:1px;
        margin: 0 10px;
    }
  `]
})
export class SubscriptionWizardComponent implements OnInit {
  @Output() subscriptionSuccess: EventEmitter<any> = new EventEmitter();
  @Output() subscriptionError: EventEmitter<any> = new EventEmitter();
  @Output() onDiscountFormValid: EventEmitter<any> = new EventEmitter();
  @Input() kidsAmount;
  @Input() adultsAmount;
  @Input() isComingAlone;
  @Input() startsAt = _today;
  @Input() user;
  public limitDate;

  public subscription$: Observable<any>;
  public paymentRequest;
  public discountCard;
  public discountCode;
  public step = 1;
  public hasDiscountCard = false;
  public stripeKey = environment.stripe.key;
  public displayError$;
  public payErrorMsg$;
  public payLoading$: Observable<any>;;
  public totalPay = 0;
  public plan;
  public selectableDates = [];
  public claimDiscount: boolean = false;
  public payPalClient = {
    sandbox: 'AaJEzmFqAI2D8FhfNWFEvIl_EzZKX6iQOAHoXUVg_Tart6VgiFGfbYHBx5Lt9zQz8pW1aiFvF0AJC0LW',
    production: 'AcxqWpVKlLzogoiEzh9NnzhWcUrJuvoxqJMK5n-ie7AgxaZipSU3mCIqzGxlfVJ7KlHmMhGitkNdujUw'
  };
  public payPalTransactions = [];
  public cardError;
  public showDiscountCode;
  constructor(
    private store: Store<any>,
    private fb: FormBuilder
  ) {

  }

  showDiscountCodeForm() {
    this.showDiscountCode = true;
  }

  claim() {
    this.claimDiscount = true;
  }

  onStartDateSelected($event) {
    this.paymentRequest.get('value').startsAt($event.value);
  }

  ngOnInit() {

    document.body.scrollTop = 0;
    this.paymentRequest = this.fb.group({
      kidsAmount: [this.kidsAmount || 0],
      adultsAmount: [this.adultsAmount || 0],
      startsAt: [this.startsAt || ''],
      isComingAlone: [this.isComingAlone || false],
      plan: [null],
      cardToken: ['']
    });

    this.limitDate = moment(this.startsAt).clone();

    this.discountCard = this.fb.group({
      discountCardCode: ['']
    });

    this.discountCode = this.fb.group({
      code: ['']
    });

    this.paymentRequest.valueChanges.subscribe(data => {
      if (data.plan) {
        this.calculateTotalToPay();
      }
    });
    this.payLoading$ = onStateChangeObservable(this.store, 'subscription.loading');
    this.payErrorMsg$ = onStateChangeObservable(this.store, 'subscription.error');
  }

  onDiscountFormValidity($event) {
    const _code = $event.value.code;
    this.store.dispatch(new ValidateCode(_code));
  }

  back() {
    this.step --;
    this.hasDiscountCard = false;
  }

  next() {
    this.step ++;
    this.hasDiscountCard = false;
  }


  get hasDiscount() {
    return this.user && this.user.discountCodes && this.user.discountCodes.length;
  }

  onCardChargeSuccess = (result) => {
    let token = result.token ? result.token.id : null;
    this.paymentRequest.get('cardToken').setValue(token);
    let _request = this.paymentRequest.value;
    _request.type = 'stripe';
    this.store.dispatch(new PostSubscription(_request));
    this.subscription$ = onStateChangeObservable(this.store, 'subscription');
    this.subscriptionSuccess.emit({success: true});
    this.cardError = null;
	}

	onCardChargeError = (err) => {
    console.log(err);
    this.cardError = err ? err.message : null;
	};

  hasDiscountCardChange(event) {
    this.hasDiscountCard = event;
  }

  selectPlan = (plan) => {
    this.plan = plan;
    this.calculateTotalToPay();
    this.next();
  }

  paypalAuthorized($event) {
    let _request = this.paymentRequest.value;
    _request.payment = $event;
    _request.type = 'paypal';
    this.store.dispatch(new PostSubscription(_request));
    this.subscription$ = onStateChangeObservable(this.store, 'subscription');
    this.subscriptionSuccess.emit({success: true});
  }

  calculateTotalToPay() {
      let kidsAmount = this.paymentRequest.get('kidsAmount').value || 0;
      let adultsAmount = this.paymentRequest.get('adultsAmount').value || 0;
      let plan = this.plan || {};
      let adultsTotalPrice = adultsAmount * plan.adultPrice;
      let kidsTotalPrice = kidsAmount * plan.kidPrice;
      let total = adultsTotalPrice + kidsTotalPrice || 0;
      this.totalPay = Math.round((total) * 100) / 100;

      this.payPalTransactions = [{
        amount: {
          total: this.totalPay,
          currency: 'USD'
        },
        description: 'Payment for: Plan: ' + this.plan + 'Kids: ' + kidsAmount + ' Adults: ' + adultsAmount
      }];
  }

}


