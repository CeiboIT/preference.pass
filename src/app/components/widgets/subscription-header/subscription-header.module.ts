import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionHeaderComponent } from './subscription-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubscriptionHeaderComponent],
  exports: [SubscriptionHeaderComponent]
})
export class SubscriptionHeaderModule { }
