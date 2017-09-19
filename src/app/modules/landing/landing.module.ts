import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { ActivityListModule } from '../../components/activities/activity-list/activity-list.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { HotDealsListModule } from '../../components/activities/hot-deals-list/hot-deals-list.module';
import { BenefitsHeaderModule } from "../../components/widgets/benefits-header/benefits-header.module";


@NgModule({
  imports: [
    CommonModule,
    routing,
    ActivityListModule,
    HotDealsListModule,
    BenefitsHeaderModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
