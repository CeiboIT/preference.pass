import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBookingsComponent } from './user-bookings.component';
import { BookingDetailCardModule } from "../../widgets/booking-detail-card/booking-detail-card.module";

@NgModule({
  imports: [
    CommonModule,
    BookingDetailCardModule
  ],
  declarations: [
    UserBookingsComponent
  ],
  exports: [
    UserBookingsComponent
  ]
})
export class UserBookingsModule { }