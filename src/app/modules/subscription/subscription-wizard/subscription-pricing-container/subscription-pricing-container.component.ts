import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-container',
  template: `    
    <div class="d-flex flex-column text-center w-100">
      <h2 class="my-4">
        Select a pricing plan
      </h2>
      <app-subscription-pricing-form [hasDiscount]="hasDiscount" 
                                     [parent]="parent" 
                                     [changePlan]="changePlan">
      </app-subscription-pricing-form>
    </div>
  `
})
export class SubscriptionPricingContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() selectPlan;
  @Input() hasDiscount;
  @Output() hasDiscountCardChangeEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  hasDiscountCardChangeStatus() {
    this.hasDiscountCardChangeEvent.emit(true);
  }

  changePlan = (plan) => {
    this.selectPlan(plan);
  }

}
