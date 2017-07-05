import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubscriptionPricingContainerComponent} from './subscription-pricing-container.component';
import {SubscriptionPricingFormModule} from '../../../../components/forms/subscription-pricing-form/subscription-pricing-form.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionPricingFormModule
  ],
  declarations: [SubscriptionPricingContainerComponent],
  exports: [SubscriptionPricingContainerComponent]
})
export class SubscriptionPricingContainerModule { }
