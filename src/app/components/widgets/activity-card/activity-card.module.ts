import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { MdCardModule } from '@angular/material';
import { ActivityTitleComponent } from './activity-title/activity-title.component';
import { ActivitySavingModule } from '../../../components/activities/activity-saving/activity-saving.module';
import { ActivityPriceModule } from '../../../components/activities/activity-price/activity-price.module'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ActivitySavingModule,
    ActivityPriceModule
  ],
  declarations: [
    ActivityCardComponent,
    ActivityTitleComponent
  ],
  exports: [
    ActivityCardComponent
  ]
})
export class ActivityCardModule { }
