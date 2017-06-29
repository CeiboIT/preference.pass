import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import {MdButton, MdButtonModule, MdCardModule} from '@angular/material';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActivityCardModule} from '../../components/widgets/activity-card/activity-card.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FlexLayoutModule,
    ActivityCardModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [LandingContainerComponent],

})
export class LandingModule { }
