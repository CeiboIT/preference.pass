import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-pricing-card',
  template:  `    
    <md-card>
      <md-card-title>
        <h3 class="text-info">
          1 day
        </h3>
      </md-card-title>
      <md-card-content>
        <h2>
          $19.99
        </h2>
      </md-card-content>
      <md-card-footer>
        <button md-raised-button color="primary" class="w-100">
          Select
        </button>
      </md-card-footer>
  
    </md-card>
  `
})
export class SubscriptionPricingCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
