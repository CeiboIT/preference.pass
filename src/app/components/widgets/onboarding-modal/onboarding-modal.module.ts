import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingModalComponent } from './onboarding-modal.component';
import { Onboardstep1Component } from './onboardstep1/onboardstep1.component';
import {PreferencePassCardFormModule} from '../../forms/preference-pass-card-form/preference-pass-card-form.module';
import {SubscriptionService} from '../../../services/subscriptions/subscription.service';
import {MdButtonModule, MdDialogModule} from '@angular/material';
import { Step1feedbackComponent } from './onboardstep1/step1feedback/step1feedback.component';
import { Onboardstep2Component } from './onboardstep2/onboardstep2.component';

@NgModule({
  imports: [
    CommonModule,
    PreferencePassCardFormModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [OnboardingModalComponent, Onboardstep1Component, Step1feedbackComponent, Onboardstep2Component],
  exports: [OnboardingModalComponent],
  providers: [SubscriptionService],

})
export class OnboardingModalModule { }
