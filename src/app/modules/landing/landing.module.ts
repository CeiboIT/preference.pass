import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { MdCardModule } from '@angular/material';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { ActivityCardComponent } from '../../components/widgets/activity-card/activity-card.component'

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdCardModule
  ],
  declarations: [
    LandingContainerComponent,
    ActivityCardComponent
  ],
  exports: [LandingContainerComponent],
  
})
export class LandingModule { }
