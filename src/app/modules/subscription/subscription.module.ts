import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubscriptionWizardModule} from './subscription-wizard/subscription-wizard.module';
import {routing} from './subscription.routes';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionWizardModule,
    routing
  ],
  declarations: []
})
export class SubscriptionModule { }
