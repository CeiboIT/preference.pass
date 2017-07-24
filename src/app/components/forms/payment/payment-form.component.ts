import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit
  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  template: 
  `
  <form novalidate [formGroup]="userData" (ngSubmit)="onSubmit()">
    <div class="form-group">
        <md-input-container class="input-full-width">
          <input mdInput name="cardholder-name" placeholder="Holder Name" formControlName="name">
        </md-input-container>
    </div>
    <div class="group">
      <label>
        <span class="d-none d-sm-inline">Card number</span>
        <div id="card-element" class="field"></div>
      </label>
    </div>
      <button type="submit" class="w-100 text-white" [disabled]="userData.invalid || loading" md-raised-button color="accent">
        <span *ngIf="loading"><i class="fa fa-spinner fa-spin"></i> </span>
          Pay
      </button>
    <div class="outcome">
      <div class="error" [ngClass]="{'visible': error}" >{{errorMsg}}</div>
    </div>
  </form>
  `,
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent implements AfterContentInit {
  @Input() onSuccess;
  @Input() onError;
  @Input() promise;
  @Input() amount;
  @Input() stripeKey;
  @Input() loading;
  @Input() error;
  @Input() errorMsg;
  public stripe;
  private card;
  private elements;
  userData: FormGroup;

  constructor(
    private elementRef: ElementRef, 
    private fb: FormBuilder
  )  {}

  ngOnInit() {
    this.stripe = (<any>window).Stripe(this.stripeKey);
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card', {
      style: {
        base: {
          iconColor: 'rgba(0, 0, 0, 0.7)',
          color: '#31325F',
          lineHeight: '40px',
          fontWeight: 300,
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: '15px',

          '::placeholder': {
            color: '#CFD7E0',
          },
        },
      }
    });
    this.userData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  ngAfterContentInit() {
    this.card.mount('#card-element');
  }

  onSubmit() {
    this.loading = true;
    const user = this.userData.value;
    const cardPromise = this.stripe.createToken(this.card, user);
    if (this.promise) {
      this.promise(cardPromise);
    } else {
      cardPromise
        .then((result) => {
          if(!result.error) {
            this.onSuccess(result);
          } else {
            this.loading = false;
            this.onError(result.error);
          }
        }).catch((err) => {
          this.onError(err);
      })
    }
  }

}
