import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerComponent } from './activity-container.component';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { ActivityDetailModule } from '../../../components/activities/activity-detail/activity-detail.module';
import { ActivityDetailLoaderModule } from '../../../components/loaders/activity-detail-loader/activity-detail.module'

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    ActivityDetailModule,
    ActivityDetailLoaderModule
  ],
  exports: [
    ActivityContainerComponent
  ],
  declarations: [
    ActivityContainerComponent
  ]
})

export class ActivityContainerModule { }
