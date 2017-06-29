import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {ActivityCardModule} from '../../components/widgets/activity-card/activity-card.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ActivityCardModule,
    FlexLayoutModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [LandingContainerComponent],

})
export class LandingModule { }
