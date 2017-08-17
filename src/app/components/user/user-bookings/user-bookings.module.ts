import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBookingsComponent } from './user-bookings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserBookingsComponent
  ],
  exports: [
    UserBookingsComponent
  ]
})
export class UserBookingsModule { }