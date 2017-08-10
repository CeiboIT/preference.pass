import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserProfileContainerComponent } from './user-profile-container/user-profile-container.component';

const routes: Routes = [
    { path : 'profile', component : UserProfileContainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
