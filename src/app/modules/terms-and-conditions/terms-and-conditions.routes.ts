import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from "./terms-and-conditions.component";

const routes: Routes = [
  { path : '', component: TermsAndConditionsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
