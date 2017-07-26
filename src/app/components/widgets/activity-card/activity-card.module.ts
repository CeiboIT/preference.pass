import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { MdCardModule } from '@angular/material';
import { ActivityTitleComponent } from './activity-title/activity-title.component';
import { ActivityPriceComponent } from './activity-price/activity-price.component';
import { ActivitySavingModule } from '../../../components/activities/activity-saving/activity-saving.module'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ActivitySavingModule
  ],
  declarations: [
    ActivityCardComponent,
    ActivityTitleComponent, 
    ActivityPriceComponent
  ],
  exports: [
    ActivityCardComponent
  ]
})
export class ActivityCardModule { }
