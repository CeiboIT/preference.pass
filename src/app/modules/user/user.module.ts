import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.routes';
import { RouterModule }   from '@angular/router';
import { UserContainerComponent } from './user.component';
import { UserProfileContainerModule } from './user-profile-container/user-profile-container.module';
import { BookingsContainerModule } from './bookings-container/bookings-container.module';
import { SubscriptionsContainerModule } from "./subscriptions-container/subscriptions-container.module";
import { CompanionsContainerModule } from "./companions-container/companions-container.module";
import { MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    MdCardModule,
    UserProfileContainerModule,
    BookingsContainerModule,
    SubscriptionsContainerModule,
    CompanionsContainerModule
  ],
  exports: [
    UserContainerComponent
  ],
  declarations: [
    UserContainerComponent
  ]
})

export class UserModule { }
