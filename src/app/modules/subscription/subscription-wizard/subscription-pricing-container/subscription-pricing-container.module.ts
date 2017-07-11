import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPricingContainerComponent } from './subscription-pricing-container.component';
import { SubscriptionPricingFormModule } from '../../../../components/forms/subscription-pricing-form/subscription-pricing-form.module';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionPricingFormModule,
    MdButtonModule
  ],
  declarations: [SubscriptionPricingContainerComponent],
  exports: [SubscriptionPricingContainerComponent]
})
export class SubscriptionPricingContainerModule { }
