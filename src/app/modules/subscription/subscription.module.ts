import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubscriptionWizardModule} from './subscription-wizard/subscription-wizard.module';
import {routing} from './subscription.routes';
import { SubscriptionPricingComponent } from './subscription-pricing/subscription-pricing.component';
import { SubscriptionPricingContainerComponent } from './subscription-pricing-container/subscription-pricing-container.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionWizardModule,
    routing
  ],
  declarations: [SubscriptionPricingComponent, SubscriptionPricingContainerComponent]
})
export class SubscriptionModule { }
