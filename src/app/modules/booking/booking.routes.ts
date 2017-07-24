import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingWizardContainerComponent } from './booking-wizard-container/booking-wizard-container.component';

const routes: Routes = [
  { path : 'wizard/:id', component: BookingWizardContainerComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
