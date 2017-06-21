import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
