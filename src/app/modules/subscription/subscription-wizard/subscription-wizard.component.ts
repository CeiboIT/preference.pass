import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { PostSubscription, ValidateCode } from '../../../actions/subscription';
import { stripeKey } from '../../../constants/stripe';

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
        <div *ngIf="claimDiscount">
          <app-discount-code-form [parent]="discountCode"
            (onValid)="onDiscountFormValidity($event)"
          ></app-discount-code-form>
          <div *ngIf="discountCardValidationLoading">
            <span>
              Validating code
            </span>
          </div>
        </div>
        <div *ngIf="!claimDiscount">
          <div >
            <button md-button color="primary" (click)="claim()">
              Claim discount
            </button>   
          </div>
          <div>
            <app-companion-amount [parent]="paymentRequest"></app-companion-amount>
          </div>
          <div class="mb-4" [hidden]="hasDiscountCard">
            <app-subscription-pricing-container [parent]="paymentRequest"
                                                [selectPlan]="selectPlan"
                                                (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)"
                                                [hasDiscount]="hasDiscount"
            >
            </app-subscription-pricing-container>
          </div>
        </div>

      </div>
      <div [hidden]="step !== 2">
        <div class="d-flex flex-column w-100">
          <h2 class="text-center">Amount: USD {{ totalPay }}</h2>
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
      <!--<div>
        {{ paymentRequest.value | json }}
      </div>-->
      <!--<div>
        {{ discountCard.value | json }}
      </div>-->

      <div class="d-flex justify-content-between mt-4">
        <button md-button (click)="back()" [disabled]="step === 1 || hasDiscountCard">
          BACK
        </button>
        <button md-button (click)="next()" [disabled]="step === 3 || hasDiscountCard">
          CONTINUE
        </button>
      </div>
    </md-card>
  </div>
  `,
  styles: [`
    md-card {
      margin: -24px;
    }

    @media screen and (max-width: 768px) {
      md-card {
        margin: -16px -24px;
        box-shadow: none!important;
      }
    }

  `]
})
export class SubscriptionWizardComponent implements OnInit {
  @Output() subscriptionSuccess: EventEmitter<any> = new EventEmitter();
  @Output() subscriptionError: EventEmitter<any> = new EventEmitter();
  @Output() onDiscountFormValid: EventEmitter<any> = new EventEmitter();
  @Input() kidsAmount;
  @Input() adultsAmount;

  public subscription$: Observable<any>;
  public paymentRequest;
  public discountCard;
  public discountCode;
  public step = 1;
  public hasDiscountCard = false;
  public hasDiscount = false;
  public stripeKey = stripeKey;
  public displayError$;
  public payErrorMsg$;
  public payLoading$: Observable<any>;;
  public totalPay = 0;
  public plan;
  public claimDiscount: boolean = false;
  constructor(
    private store: Store<any>,
    private fb: FormBuilder
  ) {

  }

  onCompanionFormSuccessClick($event) {
    console.log('click on success');
  }

  claim() {
    this.claimDiscount = true;
  }

  ngOnInit() {
    this.paymentRequest = this.fb.group({
      kidsAmount: [this.kidsAmount || ''],
      adultsAmount: [this.adultsAmount || ''],
      isComingAlone: [false],
      plan: [''],
      cardToken: ['']
    });
    this.discountCard = this.fb.group({
      discountCardCode: ['']
    });

    this.discountCode = this.fb.group({
      code: ['']
    });

    this.paymentRequest.valueChanges.subscribe(data => {
      if(data.plan) {
        this.calculateTotalToPay();
      }
    });
    this.payLoading$ = onStateChangeObservable(this.store, 'subscription.loading');
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

  onCardChargeSuccess = (result) => {
    let token = result.token ? result.token.id : null;
    this.paymentRequest.get('cardToken').setValue(token);
    this.store.dispatch(new PostSubscription(this.paymentRequest.value));
    this.subscription$ = onStateChangeObservable(this.store, 'subscription');
    this.subscriptionSuccess.emit({success: true});
	}
	onCardChargeError = (err) => {
		console.log(err);
		this.subscriptionError.emit({err: err});
	}
  hasDiscountCardChange(event) {
    this.hasDiscountCard = event;
  }

  selectPlan = (plan) => {
    this.plan = plan;
    this.calculateTotalToPay();
  }

  calculateTotalToPay() {
      let kidsAmount = this.paymentRequest.get('kidsAmount').value || 0;
      let adultsAmount = this.paymentRequest.get('adultsAmount').value || 0;
      let plan = this.plan || {};

      let adultsTotalPrice = (adultsAmount + 1) * plan.adultPrice;
      let kidsTotalPrice = kidsAmount * plan.kidPrice;
      let total = adultsTotalPrice + kidsTotalPrice || 0;

      this.totalPay = Math.round((total) * 100) / 100;
  }

}


