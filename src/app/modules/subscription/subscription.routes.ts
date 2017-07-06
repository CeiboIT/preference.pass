import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionWizardComponent } from './subscription-wizard/subscription-wizard.component';

const routes: Routes = [
  { path : 'wizard', component: SubscriptionWizardComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
