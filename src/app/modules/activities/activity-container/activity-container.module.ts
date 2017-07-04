import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { ActivityContainerComponent } from './activity-container.component';
import { ActivityDetailComponent } from '../../../components/activities/activity-detail/activity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule
  ],
  exports: [ActivityContainerComponent],
  declarations: [ActivityContainerComponent, ActivityDetailComponent]
})

export class ActivityContainerModule { }
