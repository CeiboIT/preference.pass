import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-container',
  template: `    
    <div>
      <button md-raised-button color="primary">
        I have a discount card
      </button>
      <app-subscription-pricing-form ></app-subscription-pricing-form>
    </div>
  `
})
export class SubscriptionPricingContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
