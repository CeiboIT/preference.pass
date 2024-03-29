import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingWizardContainerComponent } from './booking-wizard-container.component';
import { BookingDateSelectorFormModule } from '../../../components/forms/booking-date-selector-form/booking-date-selector-form.module';
import { PickLocationAndTimeSelectionFormModule } from '../../../components/forms/pick-location-and-time-selection-form/pick-location-and-time-selection-form.module';
import { CompanionChargeFormModule } from '../../../components/forms/companion-charge-form/companion-charge-form.module';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencePassCardFormModule } from '../../../components/forms/preference-pass-card-form/preference-pass-card-form.module';
import { CompanionAmountModule } from '../../../components/forms/companion-amount/companion-amount.module';
import { TotalSavingModule } from '../../../components/booking/total-saving/total-saving.module';
import { DateSelectModule } from '../../../components/forms/fields/date-select/date-select.module';
import { CompanionsFormModule} from '../../../components/forms/companions-form/companions-form.module';
import { BookingStep1Component } from './booking-step-1/booking-step-1.component';
import { BookingStep2Component } from './booking-step-2/booking-step-2.component';
import { BookingStep3Component } from './booking-step-3/booking-step-3.component';
import { BookingPreviewModule} from '../../../components/booking/booking-preview/booking-preview.module';
import { SubscriptionWizardModule} from '../../subscription/subscription-wizard/subscription-wizard.module';
import { SubscriptionCompanionsFormModule } from '../../../components/forms/subscription-companions-form/subscription-companions-form.module';
import { SubscriptionCompanionSelectFormModule}  from '../../../components/forms/subscription-companion-select-form/subscription-companion-select-form.module';
import {BookingUserLocationFormModule} from '../../../components/forms/booking-user-location-form/booking-user-location-form.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookingDateSelectorFormModule,
    PickLocationAndTimeSelectionFormModule,
    CompanionChargeFormModule,
    PreferencePassCardFormModule,
    SubscriptionWizardModule,
    CompanionAmountModule,
    MdButtonModule,
    MdCardModule,
    TotalSavingModule,
    FormsModule,
    ReactiveFormsModule,
    DateSelectModule,
    CompanionsFormModule,
    BookingPreviewModule,
    SubscriptionCompanionsFormModule,
    SubscriptionCompanionSelectFormModule,
    BookingUserLocationFormModule,
    PreferencePassCardFormModule
  ],
  declarations: [BookingWizardContainerComponent, BookingStep1Component, BookingStep2Component, BookingStep3Component],
  exports: [BookingWizardContainerComponent]
})
export class BookingWizardContainerModule { }
