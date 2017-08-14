import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsContainerComponent } from './bookings-container.component';
//import { UserProfileModule } from '../../../components/user/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BookingsContainerComponent
  ],
  declarations: [
    BookingsContainerComponent
  ]
})

export class BookingsContainerModule { }
