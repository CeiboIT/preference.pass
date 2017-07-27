import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionWizardComponent } from './subscription-wizard.component';
import { CompanionsAmountContainerComponent } from './companions-amount-container/companions-amount-container.component';
import { CompanionAmountModule } from '../../../components/forms/companion-amount/companion-amount.module';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { SubscriptionPricingContainerModule } from './subscription-pricing-container/subscription-pricing-container.module';
import { DiscountCardContainerModule } from './discount-card-container/discount-card-container.module';
import { PaymentsComponentsModule } from './../../../components/forms/payment/payment-form.module';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';

@NgModule({
  imports: [
    CommonModule,
    CompanionAmountModule,
    SubscriptionPricingContainerModule,
    DiscountCardContainerModule,
    PaymentsComponentsModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    SubscriptionWizardComponent, 
    CompanionsAmountContainerComponent,
    WizardHeaderComponent
  ],
  exports: [
    SubscriptionWizardComponent, 
    CompanionsAmountContainerComponent,
    WizardHeaderComponent
  ]
})

export class SubscriptionWizardModule { }
