import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { PostSubscription, ValidateCode } from '../../../actions/subscription';
import { stripeHandlerError } from '../../../constants/stripe';
import { environment } from "../../../../environments/environment";
import * as moment from 'moment';
const _today = moment();
const _inthreemonths = _today.clone();
_inthreemonths.add(2, 'months');

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
      <div [hidden]="step !== 1" class="row">
        <div class="col-md-6 offset-md-3 text-center">

          <div [hidden]="hasDiscountCard">
            <div class="row" *ngIf="!hasDiscount">
              <div class="col-12">
                <button type="button" class="btn btn-success btn-block btn-round text-white" (click)="claim()">
                  I have a discount code
                </button>
                <div class="row">
                  <div class="col-12" *ngIf="claimDiscount">
                    <h3 class="col-12 mt-3">
                      Introduce your discount code bellow
                    </h3>
                    <app-discount-code-form class="w-100"
                                            [parent]="discountCode"
                                            [validCode]="validDiscountCode$ | async"
                                            [message]="validDiscountCodeMessage$ | async"
                                            [loading]="discountCodeLoading$ | async"
                                            (onValid)="onDiscountFormValidity($event)"
                    ></app-discount-code-form>
                  </div>
                </div>
              </div>
            </div>
            
          <!--<div class="row" *ngIf="!user">
            <div class="col-12" [formGroup]="userData" >
              <app-email-input [parent]="userData"></app-email-input>
            </div>
          </div>!-->

          <div class="row" *ngIf="!user">
            <div class="col-12" [formGroup]="paymentRequest" >
              <app-email-input [parent]="paymentRequest"></app-email-input>
            </div>
          </div>
          
          <div class="row">
            <h2 class="col-12">
              How many people is in your party?
            </h2>
            <div class="col-12">
              <app-companion-amount [parent]="paymentRequest"></app-companion-amount>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <app-date-select
                [parent]="paymentRequest"
                [parentKey]="'startsAt'"
                [years]="years"
                [initialDate]="today"
                [limitDate]="limitDate"
                [startDate]="today"
              >
              </app-date-select>
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
                [env]="payPalEnv"
                [transactions]="payPalTransactions"
                (onAuthorized)="paypalAuthorized($event)"
                [loading]="payLoading$ | async"
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
  public limitDate = _inthreemonths.toDate();
  public today = new Date();
  public subscription$: Observable<any>;
  public paymentRequest;
  public discountCard;
  public discountCode;
  public step = 1;
  public hasDiscountCard = false;
  public stripeKey = environment.stripe.key;
  public displayError$;
  public payErrorMsg$;
  public payLoading$: Observable<any>;
  public discountCodeLoading$: Observable<any>;
  public validDiscountCode$: Observable<any>;
  public validDiscountCodeMessage$: Observable<any>;
  public totalPay = 0;
  public plan;
  public selectableDates = [];
  public claimDiscount: boolean = false;
  public payPalClient = {
    sandbox: 'AaJEzmFqAI2D8FhfNWFEvIl_EzZKX6iQOAHoXUVg_Tart6VgiFGfbYHBx5Lt9zQz8pW1aiFvF0AJC0LW',
    production: 'AcxqWpVKlLzogoiEzh9NnzhWcUrJuvoxqJMK5n-ie7AgxaZipSU3mCIqzGxlfVJ7KlHmMhGitkNdujUw'
  };
  public payPalEnv = environment.paypal.env;
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


  get years() {
    const actualYear = new Date().getFullYear();
    let _years = [actualYear];

    if (_inthreemonths.year() !== actualYear) {
      _years.push(_inthreemonths.year());
    }
    return _years;
  }

  ngOnInit() {


    document.body.scrollTop = 0;
    this.paymentRequest = this.fb.group({
      kidsAmount: [this.kidsAmount || 0],
      adultsAmount: [this.adultsAmount || 1],
      startsAt: [this.startsAt || ''],
      isComingAlone: [this.isComingAlone || false],
      plan: [null],
      cardToken: [''],
    });
    if (!this.user) {
      this.paymentRequest.addControl('email', new FormControl(), [Validators.required]);
    }

    this.discountCard = this.fb.group({
      discountCardCode: ['']
    });

    this.discountCode = this.fb.group({
      code: [''],
    });

    this.paymentRequest.valueChanges.subscribe(data => {
      if (data.plan) {
        this.calculateTotalToPay();
      }
    });
    this.payLoading$ = onStateChangeObservable(this.store, 'subscription.loading');
    this.payErrorMsg$ = onStateChangeObservable(this.store, 'subscription.error');
    this.discountCodeLoading$ = onStateChangeObservable(this.store, 'subscription.validatingDiscountCode');
    this.validDiscountCode$ = onStateChangeObservable(this.store, 'subscription.validDiscountCode');
    this.validDiscountCodeMessage$ = onStateChangeObservable(this.store, 'subscription.validDiscountCodeMessage');
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


