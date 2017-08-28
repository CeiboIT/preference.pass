import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { ActivityContainerComponent } from '../activities/activity-container/activity-container.component';
import { ActivityGridContainerComponent } from "../activities/activity-grid-container/activity-grid-container.component";

const routes: Routes = [
  { path : '', component: LandingContainerComponent},
  { path: 'landing', redirectTo: '/', pathMatch: 'full'},
  { path: 'detail/:id', component: ActivityContainerComponent},
  { path: 'list/:type', component: ActivityGridContainerComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
