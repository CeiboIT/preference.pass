import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityGridContainerComponent } from './activity-grid-container.component';

const routes: Routes = [
  { path: ':type', component: ActivityGridContainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);