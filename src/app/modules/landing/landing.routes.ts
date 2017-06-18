import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainerComponent } from './landing-container/landing-container.component';

const routes: Routes = [
  { path : '', component: LandingContainerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
