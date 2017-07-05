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
      (successClicked)="onCompanionFormSucccessClick($event)"
    >
    </app-companions-amount-container>
    
    <app-subscription-pricing-container>
      
    </app-subscription-pricing-container>
    
    {{ paymentRequest.value | json }}
  </div>
  `
})
export class SubscriptionWizardComponent implements OnInit {
  public paymentRequest;
  public step = 1;
  constructor(private fb: FormBuilder) {
    this.paymentRequest = this.fb.group({
      kidsAmount: [''],
      adultsAmount: [''],
      cardToken: [''],
      discountCardCode: ['']
    });
  }

  onCompanionFormSucccessClick($event) {
    console.log('click on success');
  }

  ngOnInit() {
  }

}
