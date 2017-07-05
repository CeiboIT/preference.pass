import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-pricing-container',
  template: `    
    <div>
      <h2>
        Select price
      </h2>
      
      <app-subscription-pricing-form></app-subscription-pricing-form>
    </div>
  `
})
export class SubscriptionPricingContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
