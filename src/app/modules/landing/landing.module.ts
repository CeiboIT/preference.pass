import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActivityListModule} from '../../components/activities/activity-list/activity-list.module';
import {ActivityContainerModule} from '../activities/activity-container/activity-container.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ActivityListModule,
    ActivityContainerModule,
    FlexLayoutModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [LandingContainerComponent],

})
export class LandingModule { }
