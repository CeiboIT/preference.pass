import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { MdGridListModule } from '@angular/material';
import { ActivityCardComponent } from '../../components/widgets/activity-card/activity-card.component'

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdGridListModule
  ],
  declarations: [
    LandingContainerComponent,
    ActivityCardComponent
  ],
  exports: [LandingContainerComponent],
  
})
export class LandingModule { }
