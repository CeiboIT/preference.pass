import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'subscription', loadChildren: 'app/modules/subscription/subscription.module#SubscriptionModule' },
  { path: 'booking', loadChildren: 'app/modules/booking/booking.module#BookingModule' },
  { path: 'access_token', loadChildren: 'app/modules/token/token.module#TokenModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
