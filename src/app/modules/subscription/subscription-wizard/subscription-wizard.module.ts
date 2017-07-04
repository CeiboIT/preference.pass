import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionWizardComponent } from './subscription-wizard.component';
import { CompanionsAmountContainerComponent } from './companions-amount-container/companions-amount-container.component';
import {CompanionAmountModule} from '../../../components/forms/companion-amount/companion-amount.module';

@NgModule({
  imports: [
    CommonModule,
    CompanionAmountModule
  ],
  declarations: [SubscriptionWizardComponent, CompanionsAmountContainerComponent],
  exports: [SubscriptionWizardComponent, CompanionsAmountContainerComponent]
})
export class SubscriptionWizardModule { }
