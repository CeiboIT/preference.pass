import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-subscription-wizard',
  template: `
  <div class="container">
    <h3>
      Wizard
    </h3>
    <app-companions-amount-container [parent]="paymentRequest"
      (successClicked)="onCompanionFormSuccessClick($event)"
    ></app-companions-amount-container>
    <app-subscription-pricing-container [parent]="paymentRequest"></app-subscription-pricing-container>
    <app-discount-card-container [parent]="discountCard"></app-discount-card-container>
    <div>
      {{ paymentRequest.value | json }}
    </div>
    <div>
      {{ discountCard.value | json }}
    </div>
  </div>
  `
})
export class SubscriptionWizardComponent implements OnInit {
  public paymentRequest;
  public discountCard;
  public step = 1;
  constructor(private fb: FormBuilder) {
    this.paymentRequest = this.fb.group({
      kidsAmount: [''],
      adultsAmount: [''],
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
  }

}
