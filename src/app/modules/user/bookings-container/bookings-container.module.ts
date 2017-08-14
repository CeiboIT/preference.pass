import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsContainerComponent } from './bookings-container.component';
import { UserBookingsModule } from '../../../components/user/user-bookings/user-bookings.module';

@NgModule({
  imports: [
    CommonModule,
    UserBookingsModule
  ],
  exports: [
    BookingsContainerComponent
  ],
  declarations: [
    BookingsContainerComponent
  ]
})

export class BookingsContainerModule { }
