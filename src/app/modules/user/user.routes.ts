import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserContainerComponent } from './user.component'
import { UserProfileContainerComponent } from './user-profile-container/user-profile-container.component';
import { BookingsContainerComponent } from './bookings-container/bookings-container.component';
import { SubscriptionsContainerComponent } from "./subscriptions-container/subscriptions-container.component";
import { CompanionsContainerComponent } from "./companions-container/companions-container.component";

const routes: Routes = [
  { path : '', component: UserContainerComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: UserProfileContainerComponent },
      { path: 'bookings', component: BookingsContainerComponent },
      { path: 'subscriptions', component: SubscriptionsContainerComponent },
      { path: 'companions', component: CompanionsContainerComponent }
    ] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);