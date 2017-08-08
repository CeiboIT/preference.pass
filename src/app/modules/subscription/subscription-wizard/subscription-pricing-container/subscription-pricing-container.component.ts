import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-container',
  template: `    
    <div class="d-flex flex-column text-center w-100">
      <h2 class="mb-4">
        Select a pricing plan
      </h2>
      <button md-raised-button color="primary" class="mb-2" (click)="hasDiscountCardChangeStatus()" *ngIf="false">
        I have a discount card
      </button>
      <app-subscription-pricing-form [parent]="parent" [changePlan]="changePlan"></app-subscription-pricing-form>
    </div>
  `
})
export class SubscriptionPricingContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() selectPlan;
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
