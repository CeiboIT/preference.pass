import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealCardComponent } from './hot-deal-card.component';
import { ActivityStrikePriceModule } from "../../activities/activity-strike-price/activity-strike-price.module";
import { ActivityPriceModule } from '../../../components/activities/activity-price/activity-price.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityStrikePriceModule,
    ActivityPriceModule
  ],
  declarations: [HotDealCardComponent],
  exports: [HotDealCardComponent]
})
export class HotDealCardModule { }
