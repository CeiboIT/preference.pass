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
import {DiscountCodeFormModule} from '../../../components/forms/discount-code-form/discount-code-form.module';
import { SubscriptionStep1Component } from './subscription-step-1/subscription-step-1.component';
import { SubscriptionStep2Component } from './subscription-step-2/subscription-step-2.component';
import { SubscriptionStep3Component } from './subscription-step-3/subscription-step-3.component';
import {DateSelectModule} from '../../../components/forms/fields/date-select/date-select.module';

@NgModule({
  imports: [
    CommonModule,
    CompanionAmountModule,
    SubscriptionPricingContainerModule,
    DiscountCardContainerModule,
    DiscountCodeFormModule,
    PaymentsComponentsModule,
    MdButtonModule,
    MdCardModule,
    DateSelectModule
  ],
  declarations: [
    SubscriptionWizardComponent,
    CompanionsAmountContainerComponent,
    WizardHeaderComponent,
    SubscriptionStep1Component,
    SubscriptionStep2Component,
    SubscriptionStep3Component
  ],
  exports: [
    SubscriptionWizardComponent,
    CompanionsAmountContainerComponent,
    WizardHeaderComponent
  ]
})

export class SubscriptionWizardModule { }
