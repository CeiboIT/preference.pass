import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ActivityContainerComponent } from './activity-container.component';
import { ActivityDetailComponent } from '../../../components/activities/activity-detail/activity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    AgmCoreModule
  ],
  exports: [ActivityContainerComponent],
  declarations: [ActivityContainerComponent, ActivityDetailComponent]
})

export class ActivityContainerModule { }
