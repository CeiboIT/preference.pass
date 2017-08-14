import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.routes';
import { UserContainerComponent } from './user.component';
import { UserProfileContainerModule } from './user-profile-container/user-profile-container.module';
import { BookingsContainerModule } from './bookings-container/bookings-container.module'
import { MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdCardModule,
    UserProfileContainerModule,
    BookingsContainerModule
  ],
  exports: [
    UserContainerComponent
  ],
  declarations: [
    UserContainerComponent
  ]
})

export class UserModule { }
