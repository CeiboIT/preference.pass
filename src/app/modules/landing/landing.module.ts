import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerModule } from '../activities/activity-container/activity-container.module';
import { ActivityListModule } from '../../components/activities/activity-list/activity-list.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { routing } from './landing.routes';
import {HotDealsListModule} from '../../components/activities/hot-deals-list/hot-deals-list.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityContainerModule,
    ActivityListModule,
    HotDealsListModule,
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
