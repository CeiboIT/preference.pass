import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerModule } from '../activities/activity-container/activity-container.module';
import { ActivityListModule } from '../../components/activities/activity-list/activity-list.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { routing } from './landing.routes';

@NgModule({
  imports: [
    CommonModule,
    ActivityContainerModule,
    ActivityListModule,
    routing
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
