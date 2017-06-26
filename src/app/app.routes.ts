import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'access_token', loadChildren: 'app/modules/token/token.module#TokenModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
