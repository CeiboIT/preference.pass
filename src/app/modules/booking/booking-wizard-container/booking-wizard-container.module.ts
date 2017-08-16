import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingWizardContainerComponent} from './booking-wizard-container.component';
import {BookingDateSelectorFormModule} from '../../../components/forms/booking-date-selector-form/booking-date-selector-form.module';
import {PickLocationAndTimeSelectionFormModule} from '../../../components/forms/pick-location-and-time-selection-form/pick-location-and-time-selection-form.module';
import {CompanionChargeFormModule} from '../../../components/forms/companion-charge-form/companion-charge-form.module';
import {CompanionsSelectionFormModule} from '../../../components/forms/companions-selection-form/companions-selection-form.module';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreferencePassCardFormModule} from '../../../components/forms/preference-pass-card-form/preference-pass-card-form.module';
import {CompanionAmountModule} from '../../../components/forms/companion-amount/companion-amount.module';
import {TotalSavingModule} from '../../../components/booking/total-saving/total-saving.module';
import {DateSelectModule} from '../../../components/forms/fields/date-select/date-select.module';
import {CompanionsFormModule} from '../../../components/forms/companions-form/companions-form.module';
import { BookingStep1Component } from './booking-step-1/booking-step-1.component';
import { BookingStep2Component } from './booking-step-2/booking-step-2.component';
import {BookingPreviewModule} from "../../../components/booking/booking-preview/booking-preview.module";

@NgModule({
  imports: [
    CommonModule,
    BookingDateSelectorFormModule,
    PickLocationAndTimeSelectionFormModule,
    CompanionsSelectionFormModule,
    CompanionChargeFormModule,
    PreferencePassCardFormModule,
    CompanionAmountModule,
    MdButtonModule,
    MdCardModule,
    TotalSavingModule,
    FormsModule,
    ReactiveFormsModule,
    DateSelectModule,
    CompanionsFormModule,
    BookingPreviewModule
  ],
  declarations: [BookingWizardContainerComponent, BookingStep1Component, BookingStep2Component],
  exports: [BookingWizardContainerComponent]
})
export class BookingWizardContainerModule { }
