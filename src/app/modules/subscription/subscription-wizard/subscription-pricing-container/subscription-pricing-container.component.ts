import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-container',
  template: `    
    <div>
      <h2>
        Select a pricing plan
      </h2>
      <button md-raised-button color="primary" class="mb-2" (click)="hasDiscountCardChangeStatus()">
        I have a discount card
      </button>
      <app-subscription-pricing-form></app-subscription-pricing-form>
    </div>
  `
})
export class SubscriptionPricingContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() hasDiscountCardChangeEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  hasDiscountCardChangeStatus() {
    this.hasDiscountCardChangeEvent.emit(true);
  }

}
