import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerModule } from '../activities/activity-container/activity-container.module';
import { ActivityGridContainerModule } from '../activities/activity-grid-container/activity-grid-container.module';
import { ActivityListModule } from '../../components/activities/activity-list/activity-list.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { routing } from './landing.routes';
import {HotDealsListModule} from '../../components/activities/hot-deals-list/hot-deals-list.module';
import {SubscriptionHeaderModule} from '../../components/widgets/subscription-header/subscription-header.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityContainerModule,
    ActivityGridContainerModule,
    ActivityListModule,
    HotDealsListModule,
    SubscriptionHeaderModule,
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
