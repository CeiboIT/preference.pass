import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TokenComponent} from './token.component';

const routes: Routes = [
  { path : '', component: TokenComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
