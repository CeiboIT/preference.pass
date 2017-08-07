import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { PostSubscription } from '../../../actions/subscription';
import { stripeKey } from '../../../constants/stripe';

@Component({
  selector: 'app-subscription-wizard',
  template: `
  <div class="container full-sm">
    <md-card class="m0 my-sm-3">
      <wizard-header [step]="step"></wizard-header>
      <div [hidden]="step !== 1">
        <app-companions-amount-container [parent]="paymentRequest"
          (successClicked)="onCompanionFormSuccessClick($event)"
        ></app-companions-amount-container>
      </div>
      <div [hidden]="step !== 2">
        <div class="mb-4" [hidden]="hasDiscountCard">
          <app-subscription-pricing-container [parent]="paymentRequest" 
                                              [selectPlan]="selectPlan"
                                              (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)">
          </app-subscription-pricing-container>
        </div>
        <app-discount-card-container [parent]="discountCard" [hidden]="!hasDiscountCard" 
                                     (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)">
        </app-discount-card-container>
      </div>
      <div [hidden]="step !== 3">
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
    @media screen and (max-width: 480px) {
      .full-sm {
        position: absolute!important;
        top: 0;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        z-index: 9999;
      }

      .full-sm .mat-card{
        min-height: 100%;
        width: 100%;
        border-radius: 0;
      }
    }

  `]
})
export class SubscriptionWizardComponent implements OnInit {
  @Output() subscriptionSuccess: EventEmitter<any> = new EventEmitter();
  @Output() subscriptionError: EventEmitter<any> = new EventEmitter();
  public subscription$: Observable<any>;
  public paymentRequest;
  public discountCard;
  public step = 1;
  public hasDiscountCard: boolean = false;
  public stripeKey = stripeKey;
  public displayError$;
  public payErrorMsg$;
  public payLoading$: Observable<any>;;
  public totalPay = 0;
  public plan;
  constructor(
    private store : Store<any>,
    private fb: FormBuilder
  ) {
    this.paymentRequest = this.fb.group({
      kidsAmount: [''],
      adultsAmount: [''],
      isComingAlone: [false],
      plan: [''],
      cardToken: ['']
    });
    this.discountCard = this.fb.group({
      discountCardCode: ['']
    });
  }

  onCompanionFormSuccessClick($event) {
    console.log('click on success');
  }

  ngOnInit() {
    this.paymentRequest.valueChanges.subscribe(data => {
      if(data.plan) {
        this.calculateTotalToPay();
      }
    });

    this.payLoading$ = onStateChangeObservable(this.store, 'subscription.loading');
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


