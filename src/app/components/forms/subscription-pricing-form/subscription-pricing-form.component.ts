import { Component, OnInit, Input } from '@angular/core';
import {Price} from '../../../models/subscription';
import {prices} from '../../../constants/prices';
@Component({
  selector: 'app-subscription-pricing-form',
  template: `    
      <div class="row">
        <div class="col-12">
          <h2>
            Pricing
          </h2>
        </div>
        
        <app-subscription-pricing-card class="col-3" 
                                       *ngFor="let price of pricesToUse"
                                       [price]="price"
                                       (onCardSelected)="onPriceSelected($event)"
        >
        </app-subscription-pricing-card>
      </div>
  `
})
export class SubscriptionPricingFormComponent implements OnInit {
  @Input() hasDiscount = false;
  constructor() { }
  ngOnInit() {}
  get pricesToUse(): Price[] {
    return (this.hasDiscount) ? prices.withDiscount : prices.normal;
  }
  onPriceSelected($event) {
    console.log($event);
    return $event;
  }
}
