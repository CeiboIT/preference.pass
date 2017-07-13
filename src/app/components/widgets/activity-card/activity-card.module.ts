import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import { ActivityTitleComponent } from './activity-title/activity-title.component';
import { ActivityPriceComponent } from './activity-price/activity-price.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [ActivityCardComponent, ActivityTitleComponent, ActivityPriceComponent],
  exports: [ActivityCardComponent]
})
export class ActivityCardModule { }
