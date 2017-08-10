import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../../models/subscription';
import { prices } from '../../../constants/prices';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-form',
  template: `    
      <div class="row">
        <app-subscription-pricing-card class="col-md-3 col-sm-6 mb-3" 
                                       *ngFor="let price of pricesToUse"
                                       [parent]="parent"
                                       [price]="price" (onCardSelected)="onPriceSelected($event)"
        >
        </app-subscription-pricing-card>
      </div>
  `
})
export class SubscriptionPricingFormComponent implements OnInit {
  @Input() hasDiscount = false;
  @Input() changePlan;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}

  get pricesToUse(): Price[] {
    return (this.hasDiscount) ? prices.withDiscount : prices.normal;
  }

  onPriceSelected($event) {
    this.parent.get('plan').setValue($event.id);
    this.changePlan($event);
  }
}
