import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { MdCardModule } from '@angular/material';
import { ActivityTitleComponent } from './activity-title/activity-title.component';
import { ActivityPriceModule } from '../../activities/activity-price/activity-price.module';
import { ActivityStrikePriceModule } from "../../activities/activity-strike-price/activity-strike-price.module";
import { ActivitySavingModule } from "../../activities/activity-saving/activity-saving.module";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ActivityPriceModule,
    ActivityStrikePriceModule,
    ActivitySavingModule
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
