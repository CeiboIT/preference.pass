import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityContainerComponent } from './activity-container.component';

const routes: Routes = [
  { path: ':id', component: ActivityContainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);