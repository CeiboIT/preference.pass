import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './booking.routes';
import {BookingWizardContainerModule} from './booking-wizard-container/booking-wizard-container.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    BookingWizardContainerModule

  ],
  declarations: [],
  exports: []
})
export class BookingModule { }
