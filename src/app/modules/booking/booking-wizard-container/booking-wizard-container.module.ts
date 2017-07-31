import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingWizardContainerComponent} from './booking-wizard-container.component';
import {BookingDateSelectorFormModule} from '../../../components/forms/booking-date-selector-form/booking-date-selector-form.module';
import {PickLocationAndTimeSelectionFormModule} from '../../../components/forms/pick-location-and-time-selection-form/pick-location-and-time-selection-form.module';
import {CompanionChargeFormModule} from '../../../components/forms/companion-charge-form/companion-charge-form.module';
import {CompanionsSelectionFormModule} from '../../../components/forms/companions-selection-form/companions-selection-form.module';

@NgModule({
  imports: [
    CommonModule,
    BookingDateSelectorFormModule,
    PickLocationAndTimeSelectionFormModule,
    CompanionsSelectionFormModule,
    CompanionChargeFormModule
  ],
  declarations: [BookingWizardContainerComponent],
  exports: [BookingWizardContainerComponent]
})
export class BookingWizardContainerModule { }
