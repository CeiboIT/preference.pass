import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'subscription', loadChildren: 'app/modules/subscription/subscription.module#SubscriptionModule' },
  { path: 'booking', canActivate: [AuthGuard], loadChildren: 'app/modules/booking/booking.module#BookingModule' },
  { path: 'access_token', loadChildren: 'app/modules/token/token.module#TokenModule' },
  { path: 'user',  canActivate: [AuthGuard], loadChildren: 'app/modules/user/user.module#UserModule' },
  { path: 'terms-and-conditions', loadChildren: 'app/modules/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule'},
  { path: 'about-us', loadChildren: 'app/modules/about-us/about-us.module#AboutUsModule'},
  { path: 'error', loadChildren: 'app/modules/errors/errors.module#ErrorsModule' },
  { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
