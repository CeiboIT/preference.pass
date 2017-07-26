import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { Error404Component } from './404/error-404.component';

const routes: Routes = [
  { path : 'page-not-found', component: Error404Component}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);