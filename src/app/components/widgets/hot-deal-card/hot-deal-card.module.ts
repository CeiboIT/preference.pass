import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealCardComponent } from './hot-deal-card.component';
import { ActivitySavingModule } from '../../../components/activities/activity-saving/activity-saving.module';
import { ActivityPriceModule } from '../../../components/activities/activity-price/activity-price.module';

@NgModule({
  imports: [
    CommonModule,
    ActivitySavingModule,
    ActivityPriceModule

  ],
  declarations: [HotDealCardComponent],
  exports: [HotDealCardComponent]
})
export class HotDealCardModule { }
