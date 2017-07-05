import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-pricing-card',
  template:  `    
    <md-card class="row align-items-center">
      <div class="row">
        <h3>
          1 day
        </h3>
      </div>
      <div class="row">
        <h1>
          19.99
        </h1>
        <span>
          USD
        </span>
      </div>
    </md-card>
  `
})
export class SubscriptionPricingCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
