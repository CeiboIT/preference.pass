import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingModalComponent } from './onboarding-modal.component';
import { Onboardstep1Component } from './onboardstep1/onboardstep1.component';
import {PreferencePassCardFormModule} from '../../forms/preference-pass-card-form/preference-pass-card-form.module';
import {SubscriptionService} from '../../../services/subscriptions/subscription.service';
import {MdButtonModule, MdDialogModule} from '@angular/material';
import {SubscriptionWizardModule} from '../../../modules/subscription/subscription-wizard/subscription-wizard.module';

@NgModule({
  imports: [
    CommonModule,
    PreferencePassCardFormModule,
    MdButtonModule,
    MdDialogModule,
    SubscriptionWizardModule
  ],
  declarations: [OnboardingModalComponent, Onboardstep1Component],
  exports: [OnboardingModalComponent],
  providers: [SubscriptionService],

})
export class OnboardingModalModule { }
