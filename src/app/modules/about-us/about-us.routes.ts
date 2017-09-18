import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from "./about-us.component";

const routes: Routes = [
  { path : '', component: AboutUsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);