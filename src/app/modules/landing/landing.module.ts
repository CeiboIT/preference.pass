import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {ActivityCardModule} from '../../components/widgets/activity-card/activity-card.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ActivityContainerModule } from '../activities/activity-container/activity-container.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ActivityCardModule,
    ActivityContainerModule,
    FlexLayoutModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [LandingContainerComponent],

})
export class LandingModule { }
