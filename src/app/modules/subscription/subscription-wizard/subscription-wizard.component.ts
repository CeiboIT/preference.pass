import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-subscription-wizard',
  template: `
  <div>
    <h3>
      Wizard
    </h3>
    <app-companions-amount-container [parent]="paymentRequest">
      
    </app-companions-amount-container>
  </div>
  `
})
export class SubscriptionWizardComponent implements OnInit {
  public paymentRequest;
  constructor(private fb: FormBuilder) {
    this.paymentRequest = this.fb.group({
      kidsAmount: [''],
      adultsAmount: [''],
      cardToken: [''],
      discountCardCode: ['']
    });
  }

  ngOnInit() {
  }

}
