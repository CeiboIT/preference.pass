import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import {MdButtonModule, MdCardModule} from '@angular/material';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActivityCardModule} from '../../components/widgets/activity-card/activity-card.module';
import {ActivityCardComponent} from "../../components/widgets/activity-card/activity-card.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule
  ],
  declarations: [
    LandingContainerComponent, ActivityCardComponent
  ],
  exports: [LandingContainerComponent],

})
export class LandingModule { }
