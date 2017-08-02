import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityPriceComponent } from './activity-price.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ActivityPriceComponent
  ],
  exports: [
      ActivityPriceComponent
  ]
})
export class ActivityPriceModule { }
