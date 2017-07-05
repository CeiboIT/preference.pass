import { Component, OnInit, Input } from '@angular/core';
import {Pricing} from '../../../models/subscription';

@Component({
  selector: 'app-subscription-pricing-form',
  template: `    
      <div class="row">
        <div class="col-12">
          <h2>
            Pricing
          </h2>
        </div>
        <app-subscription-pricing-card class="col-3">
          
        </app-subscription-pricing-card>
      </div>
  `
})
export class SubscriptionPricingFormComponent implements OnInit {
  @Input() pricing: Pricing[] = [];
  constructor() { }

  ngOnInit() {
  }

}
