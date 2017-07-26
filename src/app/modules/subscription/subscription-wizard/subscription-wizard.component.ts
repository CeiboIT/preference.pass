import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { PostSubscription } from '../../../actions/subscription';

@Component({
  selector: 'app-subscription-wizard',
  template: `
  <div class="container full-sm">
    <md-card class="m0 my-sm-3">
      <div class="wz-header d-sm-flex d-none flex-row justify-content-between">
          <div class="d-flex mdl-step" [ngClass]="{'is-active': step === 1}">
            <span class="mdl-step__label" (click)="step = 1">
              <span class="mdl-step__title">
                <span class="mdl-step__title-text">Title of step 1</span>
            </span>
            <span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">1</span></span></span>
          </div>
          <div class="d-flex mdl-step" [ngClass]="{'is-active': step === 2}">
            <span class="mdl-step__label" (click)="step = 2">
              <span class="mdl-step__title">
                <span class="mdl-step__title-text">Title of step 2</span>
            </span>
            <span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">2</span></span></span>
          </div>
          <div class="d-flex mdl-step" [ngClass]="{'is-active': step === 3}">
            <span class="mdl-step__label" (click)="step = 3">
              <span class="mdl-step__title">
                <span class="mdl-step__title-text">Title of step 3</span>
            </span>
            <span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">3</span></span></span>
          </div>
      </div>

      <div [hidden]="step !== 1">
        <app-companions-amount-container [parent]="paymentRequest"
          (successClicked)="onCompanionFormSuccessClick($event)"
        ></app-companions-amount-container>
      </div>
      <div [hidden]="step !== 2">
        <div class="mb-4" [hidden]="hasDiscountCard">
          <app-subscription-pricing-container [parent]="paymentRequest" 
                                              (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)">
          </app-subscription-pricing-container>
        </div>
        <app-discount-card-container [parent]="discountCard" [hidden]="!hasDiscountCard" 
                                     (hasDiscountCardChangeEvent)="hasDiscountCardChange($event)">
        </app-discount-card-container>
      </div>
      <div [hidden]="step !== 3">
        <app-payment-form
            [onSuccess]="onCardChargeSuccess"
            [onError]="onCardChargeError"
            [stripeKey]="stripeKey"
            [error]="displayError$ | async"
            [errorMsg]="payBidErrorMsg$ | async"
            [loading]="payBidLoading$ | async">
        </app-payment-form>
      </div>
      <div>
        {{ paymentRequest.value | json }}
      </div>
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
    .wz-header {
      margin: -24px -24px 24px -24px!important;
      padding: 0 24px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
    .mdl-step:not(:last-child):after {
      content: '';
      position: relative;
      flex: 1;
      top: 37px;
      width: 168px;
      margin-left: -12px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .mdl-step:not(:last-child) {
      flex: 1;
    }

    .mdl-step {
      position: static;
      -webkit-display: flex;
      -moz-display: flex;
      -ms-display: flex;
      display: flex;
      justify-content: center;
      align-items: initial;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      height: initial;
      max-height: 84px;
      overflow: hidden;
    }

    .mdl-step__label {
      padding: 24px;
    }

    @media screen and (max-width: 480px) {
      .full-sm {
        position: absolute!important;
        top: 0;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }

      .full-sm .mat-card{
        min-height: 100%;
        width: 100%;
      }
    }

  `]
})
export class SubscriptionWizardComponent implements OnInit {
  public subscription$: Observable<any>;
  public paymentRequest;
  public discountCard;
  public step = 1;
  public hasDiscountCard: boolean = false;
  public stripeKey = 'pk_test_ytilLs2GH1gG6yfhii1Wc7s1';
  public displayError$;
  public payBidErrorMsg$;
  public payBidLoading$;
  constructor(
    private fb: FormBuilder, 
    private store: Store<any>) {
    this.paymentRequest = this.fb.group({
      kidsAmount: [''],
      adultsAmount: [''],
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

  ngOnInit() { }

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
	}

	onCardChargeError = (err) => {
		console.log(err);
	}

  hasDiscountCardChange(event) {
    this.hasDiscountCard = event;
  }

}


