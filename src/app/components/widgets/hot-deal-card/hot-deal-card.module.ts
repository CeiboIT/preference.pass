import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealCardComponent } from './hot-deal-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotDealCardComponent],
  exports: [HotDealCardComponent]
})
export class HotDealCardModule { }
