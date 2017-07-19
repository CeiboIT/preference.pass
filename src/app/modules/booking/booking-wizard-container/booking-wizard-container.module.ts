import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingWizardContainerComponent} from './booking-wizard-container.component';
import {BookingDateSelectorFormModule} from '../../../components/forms/booking-date-selector-form/booking-date-selector-form.module';

@NgModule({
  imports: [
    CommonModule,
    BookingDateSelectorFormModule
  ],
  declarations: [BookingWizardContainerComponent],
  exports: [BookingWizardContainerComponent]
})
export class BookingWizardContainerModule { }
