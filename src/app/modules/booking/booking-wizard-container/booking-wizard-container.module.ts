import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingWizardContainerComponent} from './booking-wizard-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookingWizardContainerComponent],
  exports: [BookingWizardContainerComponent]
})
export class BookingWizardContainerModule { }
