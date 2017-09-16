import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealCardComponent } from './hot-deal-card.component';
import { ActivityStrikePriceModule } from "../../activities/activity-strike-price/activity-strike-price.module";
import { ActivityPriceModule } from '../../../components/activities/activity-price/activity-price.module';
import { ActivitySavingModule } from "../../activities/activity-saving/activity-saving.module";

@NgModule({
  imports: [
    CommonModule,
    ActivityStrikePriceModule,
    ActivityPriceModule,
    ActivitySavingModule
  ],
  declarations: [HotDealCardComponent],
  exports: [HotDealCardComponent]
})
export class HotDealCardModule { }
