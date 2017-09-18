import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from "./how-it-works.component";

const routes: Routes = [
  { path : '', component: HowItWorksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);